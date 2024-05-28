import { URL } from "@/src/lib/api";
import axios, { AxiosResponse } from "axios";
import {
  GetCharactersResponse,
  GetEpisodesResponse,
  GetLocationsResponse,
  Query,
} from "./_model";

export const getCharacters = async ({
  name,
  page,
  status,
}: Query): Promise<GetCharactersResponse> => {
  return axios
    .get(`${URL}character`, {
      params: {
        name,
        page,
        status,
      },
    })
    .then((res: AxiosResponse<GetCharactersResponse>) => res.data);
};
export const getData = async (page?: number): Promise<GetLocationsResponse> => {
  try {
    const fullUrl = `${URL}location`;
    console.log("axion: ", page);
    const response: AxiosResponse<GetLocationsResponse> = await axios.get(
      fullUrl,
      {
        params: {
          page,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
    throw error;
  }
};
export const getEpisodes = async (): Promise<GetEpisodesResponse> => {
  return axios
    .get(`${URL}episodes`)
    .then((res: AxiosResponse<GetEpisodesResponse>) => res.data);
};
