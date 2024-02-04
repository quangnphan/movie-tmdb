import axios from "axios";

const TMDB_URL = "https://api.themoviedb.org/3";
const APP_URL = "https://localhost:3000";

export const tmdbApi = axios.create({
  baseURL: TMDB_URL,
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
  },
});

export const appApi = axios.create({
  baseURL: APP_URL,
});
