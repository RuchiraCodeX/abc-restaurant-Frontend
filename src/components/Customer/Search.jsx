import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [searchType, setSearchType] = useState('name');

    const handleSearch = async (e) => {
        e.preventDefault();

        const endpoint = searchType === 'name'
            ? `/api/restaurants/search/name?name=${query}`
            : `/api/restaurants/search/dish?dishName=${query}`;

        try {
            const response = await axios.get(endpoint);
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">Search Restaurants and Dishes</h1>
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-8">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-grow px-4 py-2 border rounded-lg focus:outline-none"
                    placeholder="Search..."
                />
                <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="px-4 py-2 border rounded-lg focus:outline-none"
                >
                    <option value="name">Restaurant Name</option>
                    <option value="dish">Dish Name</option>
                </select>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Search
                </button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((restaurant) => (
                    <div key={restaurant.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold">{restaurant.name}</h2>
                            <p className="text-gray-700 mt-2">{restaurant.description}</p>
                            <p className="text-gray-500 mt-2">{restaurant.address}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
