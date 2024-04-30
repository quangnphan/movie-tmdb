import { MovieDetails } from '@/types/tmdb';
import React from 'react';

interface Props {
  data: MovieDetails;
}

const Details = ({ data }: Props) => {
  return (
    <div className='w-[15%]'>
      <div className='mb-[25px]'>
        <h3 className='font-bold text-white'>RATING</h3>
        <div className='text-2xl text-slate-400'>{data.vote_average.toFixed(2)}/10</div>
      </div>
      <div>
        <h3 className='font-bold text-white'>RUNTIME</h3>
        <div className='flex items-center'>
          <div className='mr-2 text-2xl font-bold'>{data.runtime}</div>
          <div className='text-sm'>min</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
