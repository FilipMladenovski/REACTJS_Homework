import React from 'react';
import { countries } from '../data/countries';
import { Country } from '../interfaces/Country';

interface MainProps {
    region: string;
}

const Main: React.FC<MainProps> = ({ region }) => {
    const filteredCountries = countries.filter((country) => country.region === region);

    return (
        <main>
            {region === 'Home' ? (
                <React.Fragment>
                    <h2>{region} Page</h2>
                    {filteredCountries.length > 0 ? (
                        <ul>
                            {filteredCountries.map((country: Country) => (
                                <li key={country.name.common}>
                                    <img src={country.flag} alt={`${country.name.common} flag`} />
                                    <div>
                                        <h3>{country.name.common}</h3>
                                        <p><strong>Capital:</strong> {country.capital.join(', ')}</p>
                                        <p><strong>Area:</strong> {country.area} km²</p>
                                        <p><strong>Population:</strong> {country.population}</p>
                                        <p><strong>Landlocked:</strong> {country.landlocked ? 'Yes' : 'No'}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No countries found in this region.</p>
                    )}
                </React.Fragment>
            ) : (
                <h2>{region} Page</h2>
            )}
        </main>
    );
};

export default Main;
