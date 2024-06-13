import React, { useState } from 'react';
import { countries } from '../data/countries';
import CountryItem from './CountryItem';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const Home: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const topCountries = countries.slice(0, 10);

    return (
        <main className="flex-1 p-5">
            <div className="relative mb-5">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search by country name......"
                    className="w-full pl-10 p-2 border border-gray-300 rounded-lg"
                />
            </div>
            <h2 className="text-2xl font-bold mb-5 text-center">10 Most Popular Tourist Destinations</h2>
            {searchQuery === '' ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {topCountries.map(country => (
                        <CountryItem key={country.name.common} country={country} />
                    ))}
                </ul>
            ) : (
                <div>
                    <h2 className="text-2xl font-bold mb-5 text-center">Search Results</h2>
                    {filteredCountries.length > 0 ? (
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {filteredCountries.map(country => (
                                <CountryItem key={country.name.common} country={country} />
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