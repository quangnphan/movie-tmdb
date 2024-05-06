import { getImageUrl } from '@/services/tmdb';
import { Movie } from '@/types/tmdb';
import { PlayCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  movies: Movie[];
}

const DiscoverGrid = ({ movies }: Props) => {
  return (
    <div className='relative grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
      {movies.map((movie) => (
        <Link
          href={`/movie/${movie.id}`}
          key={movie.id}
          className='group relative overflow-hidden bg-gray-800'
        >
          <div className='h-80'>
            <Image
              src={getImageUrl(movie.poster_path, 'w500')}
              alt={movie.title}
              className='object-cover duration-500 group-hover:scale-110'
              layout='fill'
            />
          </div>
          <div className='absolute inset-0 z-10 flex items-center justify-center text-slate-100 opacity-0 transition duration-500 group-hover:opacity-100'>
            <PlayCircle height={40} width={40} />
          </div>
          <p className='absolute bottom-0 left-0 w-full overflow-hidden overflow-ellipsis whitespace-nowrap bg-black/60 px-2 py-2 text-xs font-bold text-white'>
            {movie.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default DiscoverGrid;
