'use client';

import ReviewComponent from '@/components/movie/Review';
import { Skeleton } from '@/components/ui/skeleton';
import { fetchMovieDetails, fetchMovieReviews } from '@/services/tmdb';
import { MovieDetails, Review } from '@/types/tmdb';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const WatchVideoPage = () => {
  const params = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<MovieDetails>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieRes = await fetchMovieDetails(params?.movieId);
        const reviewRes = await fetchMovieReviews(params?.movieId);
        if (movieRes) {
          setMovie(movieRes);
        }

        if(reviewRes){
          setReviews(reviewRes.results)
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [params.movieId]);

  if (loading) return <Skeleton className='my-10 h-[70vh] w-full rounded-xl' />;

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  if (!movie.videos || !movie.videos.results || movie.videos.results.length === 0) {
    return <div>No videos available for this movie</div>;
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
      <div className='rounded-xl bg-slate-950 my-[15px] p-[10px]'>
      <h5 className='px-2 pt-2 text-[14px] text-slate-400'>
        You&#39;re watching the official trailer of
      </h5>
      <h3 className='px-2 text-[30px] text-white text-bold'>{movie?.title}</h3>
      </div>
      <h2 className='text-[20px] mb-[10px] text-bold'>Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews available</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
             <ReviewComponent review={review}/>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WatchVideoPage;
