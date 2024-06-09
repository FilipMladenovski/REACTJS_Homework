import React, { useState } from 'react';
import { countries } from '../data/countries';

const Home: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const topCountries = countries.slice(0, 10);

    return (
        <main>
            <div className="search-container">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search countries by name..."
                    className="search-input"
                />
            </div>
            <h2>Top 10 Most Popular Country Destinations</h2>
            {searchQuery === '' ? (
                <ul>
                    {topCountries.map(country => (
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
            ) : (
                <div>
                    <h2>Search Results</h2>
                    {filteredCountries.length > 0 ? (
                        <ul>
                            {filteredCountries.map(country => (
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
                    ) : (
                        <p>No countries found.</p>
                    )}
                </div>
            )}
        </main>
    );
};

export default Home;
