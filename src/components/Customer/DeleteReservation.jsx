import React, { useState } from 'react';
import axios from 'axios';

const DeleteReservation = () => {
    const [reservationId, setReservationId] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleDelete = async () => {
        setError('');
        setSuccess('');

        try {
            const response = await axios.delete(`http://localhost:8080/reservations/delete/${reservationId}`);

            if (response.status === 204) {
                setSuccess('Reservation deleted successfully!');
                setReservationId('');
            }
        } catch (error) {
            setError('Failed to delete reservation. Please check the ID and try again.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Delete Reservation</h2>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <div className="mb-4">
                <label className="block text-gray-700">Reservation</label>
                <input
                    type="text"
                    value={reservationId}
                    onChange={(e) => setReservationId(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                    placeholder="Enter Reservation ID"
                    required
                />
            </div>
            <button
                onClick={handleDelete}
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
                Delete Reservation
            </button>
        </div>
    );
};

export default DeleteReservation;
