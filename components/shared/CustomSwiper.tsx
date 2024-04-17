import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode } from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';
import { MovieDetails } from '@/types/tmdb';
import { FreeMode } from 'swiper/modules';
import { getImageUrl } from '@/services/tmdb';

interface SwiperProps {
  data: MovieDetails;
}

const CustomSwiper = ({ data }: SwiperProps) => {
  return (
    <div className='overflow-hidden'>
      <Swiper
        slidesPerView='auto'
        spaceBetween={15}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
        className='m-[15px]'
      >
        {data?.credits.cast.slice(0, 20).map((item) => (
          <SwiperSlide
            key={item?.id}
            style={{ height: 'auto', width: 'auto' }}
            className='animate-slideright rounded-full shadow-lg'
          >
            {item.profile_path && (
              <div className='flex items-center gap-2'>
                <img
                  src={getImageUrl(item.profile_path)}
                  alt={item.name}
                  className='h-[70px] w-[70px] rounded-full border-2 object-cover'
                />
                <div>
                  <h4>{item.name}</h4>
                  <p className='text-sm'>as {item.character}</p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
