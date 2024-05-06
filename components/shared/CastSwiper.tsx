import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/free-mode';
import { MovieDetails } from '@/types/tmdb';
import { getImageUrl } from '@/services/tmdb';

import { FreeMode, Grid } from 'swiper/modules';
import Image from 'next/image';

interface SwiperProps {
  data: MovieDetails;
}

const CastSwiper = ({ data }: SwiperProps) => {
  return (
    <div className='xl:max-w-[1000px] 2xl:max-w-[1400px] overflow-hidden'>
      <Swiper
        spaceBetween={15}
        modules={[Grid]}
        scrollbar={{ draggable: true }}
        className='my-[15px]'
        grid={{
          rows: 2,
          fill: 'row',
        }}
        breakpoints={{
          1100: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        }}
      >
        {data?.credits.cast.slice(0, 20).map((item) => (
          <SwiperSlide key={item?.id}>
            <div className='mb-[10px] flex items-start gap-2'>
              {item.profile_path ? (
                <Image
                  src={getImageUrl(item.profile_path)}
                  alt={item.name}
                  className='rounded-full border-2'
                  width={60}
                  height={50}
                  objectFit='cover'
                  objectPosition='center'
                />
              ) : (
                <Image
                  src={''}
                  alt='error'
                  className='rounded-full border-2 object-cover'
                  width={50}
                  height={50}
                />
              )}

              <div>
                <h5 className='max-w-[120px] overflow-hidden overflow-ellipsis pt-[10px] text-[13px]'>
                  {item.name}
                </h5>
                <p className='text-[11px]'>as {item.character || "NA"}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CastSwiper;
