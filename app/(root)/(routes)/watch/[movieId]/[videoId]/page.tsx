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
  if (!movie) {
    return <div>Movie not found.</div>;
  }

  const lastVideoIndex = movie.videos.results.length - 1;
  const lastVideoId = movie.videos.results[lastVideoIndex].key

  return (
    <div className='min-h-[95vh]'>
      {movie?.videos?.results && (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${lastVideoId}`}
          className='react-player'
          controls
        />
      )}
      <h5 className='px-2 pt-2 text-[14px] text-slate-400'>
        You&#39;re watching the official trailer of
      </h5>
      <h3 className='px-2 text-[30px] text-white text-bold'>{movie?.title}</h3>
    </div>
  );
};

export default WatchVideoPage;
