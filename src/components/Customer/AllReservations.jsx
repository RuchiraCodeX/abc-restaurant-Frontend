import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllReservations = () => {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get('http://localhost:8080/reservations/all');
                setReservations(response.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch reservations.');
                setLoading(false);
            }
        };

        fetchReservations();
    }, []);

    if (loading) {
        return <p className="text-center text-blue-600">Loading reservations...</p>;
    }

    if (error) {
        return <p className="text-center text-red-600">{error}</p>;
    }

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">All Reservations</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">Reservation ID</th>
                            <th className="px-4 py-2 border-b">User ID</th>
                            <th className="px-4 py-2 border-b">Service Type</th>
                            <th className="px-4 py-2 border-b">Reservation Date</th>
                            <th className="px-4 py-2 border-b">Number of Guests</th>
                            <th className="px-4 py-2 border-b">Status</th>
                            <th className="px-4 py-2 border-b">Created At</th>
                            <th className="px-4 py-2 border-b">Updated At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map((reservation) => (
                            <tr key={reservation.id}>
                                <td className="px-4 py-2 border-b">{reservation.id}</td>
                                <td className="px-4 py-2 border-b">{reservation.userID}</td>
                                <td className="px-4 py-2 border-b">{reservation.serviceType}</td>
                                <td className="px-4 py-2 border-b">{new Date(reservation.reservationDate).toLocaleString()}</td>
                                <td className="px-4 py-2 border-b">{reservation.numberOfGuests}</td>
                                <td className={`px-4 py-2 border-b ${reservation.status === 'Confirmed' ? 'text-green-600' : 'text-yellow-600'}`}>
                                    {reservation.status}
                                </td>
                                <td className="px-4 py-2 border-b">{new Date(reservation.createdAt).toLocaleString()}</td>
                                <td className="px-4 py-2 border-b">{new Date(reservation.updatedAt).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllReservations;
