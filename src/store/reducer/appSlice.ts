import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import getCharacters from "../actions/getCharacters";
import {
  GetCharactersResponse,
  GetEpisodesResponse,
  GetLocationsResponse,
  InitialState,
  Location,
  Status,
} from "../core/_model";
import getLocations from "../actions/getLocations";
import getEpisodes from "../actions/getEpisodes";

const initialState: InitialState = {
  search: "",
  isLoading: false,
  characters: [],
  locations: [],
  episodes: [],
  selectStatus: null,
  selectLocation: [],
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setStatus: (state, action: PayloadAction<Status>) => {
      state.selectStatus =
        state.selectStatus === action.payload ? null : action.payload;
    },
    setSelectLocation: (state, action: PayloadAction<Location>) => {
      state.selectLocation = state.selectLocation.some(
        (i) => i.id === action.payload.id
      )
        ? state.selectLocation.filter((i) => i.id !== action.payload.id)
        : [...state.selectLocation, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getCharacters.fulfilled,
      (state, actions: PayloadAction<GetCharactersResponse>) => {
        state.characters = actions.payload.results;
      }
    );
    builder.addCase(
      getLocations.fulfilled,
      (state, actions: PayloadAction<Location[]>) => {
        state.locations = actions.payload;
      }
    );
    builder.addCase(
      getEpisodes.fulfilled,
      (state, actions: PayloadAction<GetEpisodesResponse>) => {
        state.episodes = actions.payload.results;
      }
    );
  },
});

export const { setLoading, setSearch, setStatus, setSelectLocation } =
  appSlice.actions;
export default appSlice.reducer;
