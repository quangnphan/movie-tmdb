import { Movie } from '@/types/tmdb'
import Image from 'next/image';
import React from 'react'

interface Props {
    movies: Movie[];
}

const DiscoverGrid = ({movies}: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-gray-800 p-4 rounded-md">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-48 object-cover rounded-md mb-2"
            width={100}
            height={200}
          />
          <h3 className="text-white text-lg font-bold">{movie.title}</h3>
          <p className="text-gray-400">{movie.release_date}</p>
        </div>
      ))}
    </div>
  )
}

export default DiscoverGrid