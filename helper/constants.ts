import { Home, Search, Bomb } from "lucide-react";

export const TMDB_URL = "https://api.themoviedb.org/3";
export const APP_URL = "https://localhost:3000";

export const sidebar_links = [
  {
    label: "Home",
    icon: Home,
    href: "/home",
  },
  {
    label: "Explore",
    icon: Bomb,
    href: "/explore",
  },
  {
    label: "Search",
    icon: Search,
    href: "/search",
  },
];
