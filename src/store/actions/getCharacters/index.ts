import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacters as getData } from "../../core/_request";
import { Query } from "../../core/_model";

const getCharacters = createAsyncThunk(
  "rickAndMorty/getCharacters",
  async (data: Query, { rejectWithValue }) => {
    try {
      const response = await getData(data);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export default getCharacters;
