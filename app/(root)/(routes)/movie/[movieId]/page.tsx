'use client';

import Details from '@/components/movie/Details';
import CastSwiper from '@/components/shared/CastSwiper';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { fetchMovieDetails, getImageUrl } from '@/services/tmdb';
import { MovieDetails } from '@/types/tmdb';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const SearchPage = () => {
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

  if (loading)
    return <Skeleton className='my-10 h-[800px] w-full rounded-xl' />;

  return (
    <div className='movie-details relative'>
      {movie ? (
        <>
          <div className='flex flex-col gap-[80px]'>
            {/* Movie Banner */}
            <div className='relative h-[220px] md:h-[350px]'>
              <Image
                src={getImageUrl(movie.backdrop_path, 'w1280')}
                layout='fill'
                alt='movie banner'
                className='object-cover opacity-90'
              />
              {/* Portrait Background */}
              <div className='absolute bottom-4 left-4 z-10 translate-y-[65px]'>
                <div className='h-[200px] w-[150px] bg-gray-800'>
                  <Image
                    src={getImageUrl(movie.poster_path, 'w1280')}
                    layout='fill'
                    alt='portrait background'
                    className='object-cover'
                  />
                </div>
              </div>
              {/* Title and Watch Button */}
              <div className='absolute bottom-6 left-[182px] z-50'>
                <h2 className='custom-text-shadow text-xl font-black tracking-wide text-slate-100 md:text-3xl'>
                  {movie.title}
                </h2>
                <Link href={''}>
                  <Button
                    variant='secondary'
                    size='lg'
                    className='mt-2 !bg-red-600 font-bold uppercase tracking-wider hover:opacity-90'
                  >
                    Watch
                  </Button>
                </Link>
              </div>
            </div>

            {/* Content Below Banner */}
            <div>
              {/* Cast Slider */}
              <h3 className='font-bold text-white'>CAST</h3>
              <CastSwiper data={movie} />
              {/* Run Time, Summary, Info */}
              <div className='mt-[30px] flex max-md:flex-col gap-5 w-full items-start justify-center'>
                <Details data={movie} />

                <div className='flex-1 p-[10px]'>
                  <h3 className='mb-[15px] font-bold text-white'>STORY</h3>
                  <p className='text-sm text-white'>{movie.overview}</p>
                </div>

                <div className='w-[30%] p-[10px] text-white'>
                  <h3 className='mb-2 font-bold'>DETAILS</h3>
                  <div>
                    <p>
                      <span className='font-semibold'>Status:</span> Released
                    </p>
                    <p>
                      <span className='font-semibold'>Release date:</span>{' '}
                      {movie.release_date}
                    </p>
                    <p>
                      <span className='font-semibold'>Spoken language:</span>{' '}
                      English
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>Error fetching Movie.</>
      )}
    </div>
  );
};

export default SearchPage;
