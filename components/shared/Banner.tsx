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

import { Star, PlayCircle } from "lucide-react";

interface BannerSlideProps {
  movies: Movie[];
}

const Banner = ({ movies }: BannerSlideProps) => {
  return (
    <div className="relative h-[300px] md:h-[400px]">
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        slidesPerView={1}
        className="!absolute !top-0 !left-0 !w-full !h-full !rounded-lg group"
      >
        {movies.map((movie: any) => (
          <SwiperSlide key={movie.id} className="group-hover:duration-500">
            <Link href="">
              <Image
                src={getImageUrl(movie.backdrop_path, "w1280")}
                layout="fill"
                alt="movie banner"
                className="object-cover !opacity-[0.7]"
              />
              <div className="text-white py-7 px-12 h-full relative flex flex-col justify-between items-start">
                <div className="inline-flex bg-blue-700 rounded-full py-2 px-3">
                  <Star className="mr-1" />
                  {movie.vote_average.toFixed(1)}
                </div>

                <div>
                  <div className="absolute flex items-center justify-center inset-0 text-slate-100 z-10 opacity-0 group-hover:opacity-100 group-hover:visible transition duration-700">
                    <PlayCircle height={100} width={100} />
                  </div>
                  <h1 className="md:text-2xl xl:text-4xl text-xl font-black tracking-wide text-blue-700">
                    {movie.title}
                  </h1>
                  <p className="md:mt-3 text-shadow">
                    {movie.release_date &&
                      `Release date: ${movie.release_date}`}
                  </p>
                  <p className="hidden xl:block md:mt-5 text-base text-slate-300 text-shadow max-h-12 break-words w-[70%] line-clamp-3 text-ellipsis">
                    {movie.overview}
                  </p>
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
