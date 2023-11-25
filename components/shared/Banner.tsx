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
import { getImageUrl } from "@/services/tmdb";

interface BannerSlideProps {
  movies: Movie[];
}

const Banner = ({ movies }: BannerSlideProps) => {
  return (
    <Swiper
    modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={1}
          className="rounded-lg max-w-5xl h-[350px]"//fix this
    >
      {movies.map((movie: any, index: any) => (
         <SwiperSlide key={movie.id} className="relative">
         <Image
           src={getImageUrl(movie.backdrop_path, "w1280")}
           layout="fill" 
           alt="movie banner"
           className="object-cover"
         />
         <div className="absolute inset-0 flex items-center justify-center text-white">
           <div>
             <h1 className="text-3xl font-bold">{movie.title}</h1>
             {/* Add other description or elements here */}
           </div>
         </div>
       </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
