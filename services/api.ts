import axios from "axios";
import { TMDB_URL, APP_URL } from "@/helper/constants";

export const tmdbApi = axios.create({
  baseURL: TMDB_URL,
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
  },
});

export const appApi = axios.create({
  baseURL: APP_URL,
});
