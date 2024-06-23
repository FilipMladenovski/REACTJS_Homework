import React, { useEffect } from 'react';
import { useCountryContext } from '../context/CountryContext';
import CountryItem from './CountryItem';

interface Props {
  region: string;
}

const ContinentContainer: React.FC<Props> = ({ region }) => {
  const { countries, fetchCountries } = useCountryContext();

  useEffect(() => {
    fetchCountries(region);
  }, [region, fetchCountries]);

  const filteredCountries = countries.filter(country => country.region === region);

  return (
    <main className="flex-1 p-5">
      <h2 className="text-2xl font-bold mb-5 text-center">{region} Page</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCountries.map(country => (
          <CountryItem key={country.name.common} country={country} />
        ))}
      </ul>
    </main>
  );
};

export default ContinentContainer;
