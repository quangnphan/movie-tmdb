'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { fetchMovieDetails } from '@/services/tmdb';
import { MovieDetails } from '@/types/tmdb';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const WatchVideoPage = () => {
  const params = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<MovieDetails>();
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

  if (loading) return <Skeleton className='my-10 h-[70vh] w-full rounded-xl' />;

  return (
    <div className='min-h-[95vh]'>
      {movie?.videos?.results && (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`}
          className='react-player'
          controls
        />
      )}
      <h5 className='px-2 pt-2 text-[18px] text-slate-400'>
        You&#39;re watching
      </h5>
      <h3 className='px-2 text-[30px] text-white'>{movie?.title}</h3>
    </div>
  );
};

export default WatchVideoPage;
