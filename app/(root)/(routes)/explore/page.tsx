"use client"

import React, { useEffect, useState } from 'react'
import { fetchDiscoverMovies } from '@/services/tmdb'
import { Movie } from '@/types/tmdb'
import { Skeleton } from '@/components/ui/skeleton'
import DiscoverGrid from '@/components/shared/DiscoverGrid'

const ExplorePage = () => {

  const [movies, setMovies] = useState<Movie[]>()
  useEffect(()=>{
    const fetchMovies = async () => {
      try {
        const params: any = {
          genres: [28, 12],
          sortOrder: 'desc', 
        }
        const res = await fetchDiscoverMovies(params);
        setMovies(res.results);
      } catch (error) {
        console.log(error)
      }
    }

    fetchMovies();
  },[])

  if(!movies) return <Skeleton className='my-10 h-[800px] w-full rounded-xl' />;

  return (
    <div className="explore-page">
      <DiscoverGrid 
        movies={movies}
      />
    </div>
  )
}

export default ExplorePage