import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Country } from '../interfaces/Country';
import { fetchAllCountries, fetchCountriesByRegion } from '../api';

interface CountryContextProps {
  countries: Country[];
  fetchCountries: (region?: string) => void;
}

const CountryContext = createContext<CountryContextProps | undefined>(undefined);

interface CountryProviderProps {
  children: ReactNode;
}

export const CountryProvider: React.FC<CountryProviderProps> = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  const fetchCountries = async (region?: string) => {
    const data = region ? await fetchCountriesByRegion(region) : await fetchAllCountries();
    setCountries(data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <CountryContext.Provider value={{ countries, fetchCountries }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountryContext must be used within a CountryProvider');
  }
  return context;
};
