import React from 'react';
import { countries } from '../data/countries';

const topCountries = countries.slice(0, 10);

const Home: React.FC = () => {
    return (
        <main>
            <h2>Top 10 Most Popular Country Destinations</h2>
            <ul>
                {topCountries.map((country) => (
                    <li key={country.name.common}>
                        <img src={country.flag} alt={`${country.name.common} flag`} />
                        <div>
                            <h3>{country.name.common}</h3>
                            <p><strong>Capital:</strong> {country.capital.join(', ')}</p>
                            <p><strong>Region:</strong> {country.region}</p>
                            <p><strong>Area:</strong> {country.area} km²</p>
                            <p><strong>Population:</strong> {country.population}</p>
                            <p><strong>Landlocked:</strong> {country.landlocked ? 'Yes' : 'No'}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Home;
