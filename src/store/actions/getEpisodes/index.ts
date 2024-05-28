import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEpisodes as getData } from "../../core/_request";

const getEpisodes = createAsyncThunk(
  "rickAndMorty/getEpisodes",
  async (data, { rejectWithValue }) => {
    try {
      const response = await getData();
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export default getEpisodes;
