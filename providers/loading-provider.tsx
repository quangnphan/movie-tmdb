"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LoadingContextProps {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  const value: LoadingContextProps = {
    isLoading,
    startLoading,
    stopLoading,
  };

  return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
