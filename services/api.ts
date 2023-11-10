import axios from "axios";
import { TMDB_URL, APP_URL } from "@/helper/constants";

export const tmdbApi = axios.create({
  baseURL: TMDB_URL,
  params: {
    api_key: process.env.TMDB_API_KEY, // Replace with your TMDB API key
  },
});

export const appApi = axios.create({
  baseURL: APP_URL,
  // Other configuration options specific to your API
});
