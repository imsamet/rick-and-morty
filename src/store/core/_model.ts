export type Status = "Alive" | "Dead" | "unknown";
export type Query = {
  name?: string;
  page?: number;
  status?: Status;
};

export type InitialState = {
  search: string;
  characters: Character[];
  locations: Location[];
  episodes: Episode[];
  isLoading: boolean;
  selectStatus: Status | null;
  selectLocation: Location[];
};

// Characters
export type GetCharactersResponse = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null | string;
  };
  results: Character[];
};

type Character = {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

// Locations
export type GetLocationsResponse = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null | string;
  };
  results: Location[];
};
export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};
// Locations

export type GetEpisodesResponse = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null | string;
  };
  results: Episode[];
};
type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};
