import Image from "next/image";
import React from "react";

import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Movie } from "@/types/tmdb";
import Link from "next/link";

interface BannerSlideProps {
  movies: Movie[];
}

const Banner = ({ movies }: BannerSlideProps) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      className="w-[500px]"
    >
      {(movies as Movie[]).map((movie: any, index: any) => (
        <SwiperSlide key={movie.id}>
          <div>{movie.title}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
