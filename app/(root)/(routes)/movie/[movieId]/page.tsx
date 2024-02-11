'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { fetchMovieDetails, getImageUrl } from '@/services/tmdb';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const SearchPage = () => {
  const params = useParams<{ movieId: string }>();

  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetchMovieDetails(params?.movieId);

        if (response) {
          setMovie(response);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [params.movieId]);

  if (loading)
    return <Skeleton className='my-10 h-[800px] w-full rounded-xl' />;

  return (
    <div className='movie-details relative'>
      {movie ? (
        <>
          <div className='h-[220px] md:h-[350px]'>
            <Image
              src={getImageUrl(movie.backdrop_path, 'w1280')}
              layout='fill'
              alt='movie banner'
              className='object-cover'
            />
          </div>
          <div>Title/Portrait</div>
          <div>Cast slider</div>
          <div>run time | summary | info</div>
        </>
      ) : (
        <>Error fetching Movie.</>
      )}
    </div>
  );
};

export default SearchPage;
