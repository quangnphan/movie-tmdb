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

import { Star, Play } from "lucide-react";

interface BannerSlideProps {
  movies: Movie[];
}

const Banner = ({ movies }: BannerSlideProps) => {
  return (
    <div className="relative md:pb-[45%] pb-[55%]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={1}
        className="!absolute !top-0 !left-0 !w-full !h-full !rounded-lg group"
      >
        {movies.map((movie: any) => (
          <SwiperSlide key={movie.id} className="relative group-hover:opacity-60 group-hover:transition-opacity group-hover:duration-500">
            <Link href="/">
              <Image
                src={getImageUrl(movie.backdrop_path, "w1280")}
                layout="fill"
                alt="movie banner"
                className="object-cover"
              />
              <div className="absolute flex items-center justify-center text-white p-7">
                <div>
                  {/* <Play
                  className="text-slate-100 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-10 opacity-0 group-hover:opacity-100 group-hover:visible transition duration-700"
                  height={100}
                  width={100}
                /> */}

                  <div className="inline-flex bg-blue-700 rounded-full py-2 px-3">
                    <Star className="mr-1" />
                    {movie.vote_average.toFixed(1)}
                  </div>
                  <div className="flex flex-col justify-center md:mt-8">
                    <h1 className="md:text-3xl xl:text-5xl text-xl font-black tracking-wide md:mt-8 mt-2 text-blue-700 text-shadow w-[60%]">
                      {movie.title}
                    </h1>
                    <p className="md:mt-3 text-shadow">
                      {movie.release_date &&
                        `Release date: ${movie.release_date}`}
                    </p>
                    <p className="hidden xl:block md:mt-5 w-[30%] text-base text-slate-300 text-shadow overflow-hidden max-h-24 break-words text-ellipsis">
                      {movie.overview}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
