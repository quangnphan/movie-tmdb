"use client"

import { Skeleton } from '@/components/ui/skeleton';
import { fetchMovieDetails } from '@/services/tmdb';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const SearchPage = () => {
    const params = useParams<{movieId: string}>();

    const [movie,setMovie] = useState<any>(null);

    useEffect(()=>{
        const fetchMovie = async () => {
            // const response = await fetchMovieDetails(params.movieId)
            try {
                const response = await fetchMovieDetails(params?.movieId);

                setMovie(response);
            } catch (error) {
                console.log(error)
            }
        }

        fetchMovie();
    },[params.movieId])

    if(!movie) return <Skeleton className='my-10 h-[800px] w-full rounded-xl' />;

  return (
    <div className='movie-details'>
        <div>Big poster</div>
        <div>Title/Portrait</div>
        <div>Cast slider</div>
        <div>
            run time | summary | info
        </div>
    </div>
  )
}

export default SearchPage