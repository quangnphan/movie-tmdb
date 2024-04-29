import React from 'react';
import { Movie } from '@/types/tmdb';
import Image from 'next/image';
import { getImageUrl } from '@/services/tmdb';
import { PlayCircle } from 'lucide-react';
import Link from 'next/link';

interface MoviesProps {
  movies: Movie[];
}

const MoviesGrid = ({ movies }: MoviesProps) => {
  return (
    <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5'>
      {movies.map((movie, index) => (
        <Link
          href={`/movie/${movie.id}`}
          key={movie.id}
          className={`group relative overflow-hidden bg-gray-800 p-4 ${
            index === 0 ? 'md:col-span-2 md:row-span-2' : ''
          }`}
        >
          <div className='h-24'>
            <Image
              src={getImageUrl(movie.poster_path, 'w500')}
              alt={movie.title}
              className='object-cover duration-500 group-hover:scale-110 group-hover:!opacity-60'
              layout='fill'
            />
          </div>
          <div>
            <div className='absolute inset-0 z-10 flex cursor-pointer items-center justify-center text-slate-100 opacity-0 transition duration-500 group-hover:opacity-100'>
              <PlayCircle height={40} width={40} />
            </div>
            <p className='absolute bottom-0 left-0 w-full overflow-hidden overflow-ellipsis whitespace-nowrap bg-black/60 px-2 py-2 text-sm font-bold text-white'>
              {movie.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MoviesGrid;
