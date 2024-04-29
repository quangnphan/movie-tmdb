import Image from 'next/image';
import React from 'react';

import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Movie } from '@/types/tmdb';
import Link from 'next/link';
import { getImageUrl } from '@/services/tmdb';

import { Star, PlayCircle } from 'lucide-react';

interface BannerSlideProps {
  movies: Movie[];
}

const Banner = ({ movies }: BannerSlideProps) => {
  return (
    <div className='relative h-[220px] md:h-[500px]'>
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        slidesPerView={1}
        className='group !absolute !left-0 !top-0 !h-full !w-full'
      >
        {movies.map((movie: Movie) => (
          <SwiperSlide key={movie.id} className='group-hover:duration-500'>
            <Link href={`/movie/${movie.id}`}>
              <Image
                src={getImageUrl(movie.backdrop_path, 'w1280')}
                layout='fill'
                alt='movie banner'
                className='object-cover !opacity-[0.9]'
              />
              <div className='relative flex h-full flex-col items-start justify-between px-8 py-4 text-white md:px-12 md:py-7'>
                <div className='inline-flex rounded-full bg-orange-600 px-3 py-2'>
                  <Star className='mr-1' />
                  {movie.vote_average.toFixed(1)}
                </div>

                <div>
                  <div className='absolute inset-0 z-10 flex items-center justify-center text-slate-100 opacity-0 transition duration-700 group-hover:visible group-hover:opacity-100'>
                    <PlayCircle height={100} width={100} />
                  </div>
                  <h1 className='text-xl font-black tracking-wide text-orange-600 md:text-2xl xl:text-4xl'>
                    {movie.title}
                  </h1>
                  <div className='my-1 flex items-center gap-1 md:mt-3'>
                    {movie?.genres?.map((genre, index) => (
                      <div
                        key={index}
                        className='rounded-full bg-black/[0.8] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white'
                      >
                        {genre}
                      </div>
                    ))}
                  </div>
                  <p className='text-shadow text-sm md:mt-3 md:text-lg'>
                    {movie.release_date &&
                      `Release date: ${movie.release_date}`}
                  </p>
                  <p className='text-shadow line-clamp-3 hidden max-h-12 w-[70%] text-ellipsis break-words text-base text-slate-300 md:mt-5 xl:block'>
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
