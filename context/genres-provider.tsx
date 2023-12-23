'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { Genre } from '@/types/tmdb';
import { fetchGenreList } from '@/services/tmdb';

interface GenresContextProps {
  genres?: Genre[];
  loading: boolean;
}

const GenresContext = createContext<GenresContextProps | undefined>(undefined);

export const GenresProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [genres, setGenres] = useState<Genre[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genres = await fetchGenreList();
        setGenres(genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  const value: GenresContextProps = {
    genres,
    loading,
  };

  return (
    <GenresContext.Provider value={value}>{children}</GenresContext.Provider>
  );
};

export const useGenres = () => {
  const context = useContext(GenresContext);
  if (!context) {
    throw new Error('useGenres must be used within a GenresProvider');
  }
  return context;
};
