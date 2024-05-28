import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../core/_request";
import { Location } from "../../core/_model";

const fetch = async (): Promise<Location[]> => {
  try {
    let temp: Location[] = [];
    let response = await getData();

    temp.push(...response.results);

    while (response.info.next && response.info.next !== "") {
      const page = parseInt(
        new URL(response.info.next).searchParams.get("page")!
      );
      if (!page) break;
      console.log(page);
      response = await getData(page);
      temp.push(...response.results);
    }

    return temp;
  } catch (e) {
    throw e;
  }
};
const getLocations = createAsyncThunk(
  "rickAndMorty/getLocations",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch();
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export default getLocations;
