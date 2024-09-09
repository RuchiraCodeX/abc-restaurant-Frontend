import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/restaurants/all')
            .then(response => setRestaurants(response.data))
            .catch(error => console.error('Error fetching restaurant data:', error));
    }, []);

    return (
        
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {restaurants.map(restaurant => (
                <div key={restaurant.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h2 className="text-xl font-bold">{restaurant.name}</h2>
                        <p className="text-gray-700">{restaurant.description}</p>
                        <p className="text-gray-500 mt-2">{restaurant.address}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RestaurantList;
