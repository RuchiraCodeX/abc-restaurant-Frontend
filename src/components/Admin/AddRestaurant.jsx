import React, { useState } from 'react';
import axios from 'axios';

const AddRestaurant = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newRestaurant = { name, address, description, imageUrl };

        try {
            const response = await axios.post('http://localhost:8080/api/restaurants/add', newRestaurant);
            if (response.status === 200) {
                setMessage('Restaurant added successfully!');
            }
        } catch (error) {
            console.error('Error adding restaurant:', error);
            setMessage('Failed to add restaurant.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Add Restaurant</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Location</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Image URL</label>
                    <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                        required
                    />
                </div>
                {message && <p className="text-green-500 text-center">{message}</p>}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                    Add Restaurant
                </button>
            </form>
        </div>
    );
};

export default AddRestaurant;
