import React, { useState } from 'react';
import axios from 'axios';

const AddQuery = () => {
    const [userId, setUserId] = useState('');
    const [queryText, setQueryText] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newQuery = {
            userId,
            queryText,
        };

        try {
            const response = await axios.post('http://localhost:8080/queries/add', newQuery);
            if (response.status === 200) {
                setMessage('Query submitted successfully!');
                setUserId('');
                setQueryText('');
            } else {
                setMessage('Failed to submit query.');
            }
        } catch (error) {
            console.error('Error submitting query:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">Submit a Query</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block text-gray-700">Username</label>
                    <input
                        type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Query Text</label>
                    <textarea
                        value={queryText}
                        onChange={(e) => setQueryText(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                        rows="4"
                        required
                    ></textarea>
                </div>
                {message && <p className="text-green-500 text-center mb-4">{message}</p>}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                    Submit Query
                </button>
            </form>
        </div>
    );
};

export default AddQuery;
