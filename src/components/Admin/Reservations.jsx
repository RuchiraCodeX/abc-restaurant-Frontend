import React, { useState, useEffect } from "react";
import axios from "axios";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [reservationId, setReservationId] = useState("");
  const [reservationDetails, setReservationDetails] = useState(null);
  const [status, setStatus] = useState("");

  
  useEffect(() => {
    const fetchAllReservations = async () => {
      try {
        const response = await axios.get("http://localhost:8080/reservations/all");
        setReservations(response.data);
      } catch (error) {
        console.error("Error fetching all reservations:", error);
      }
    };

    fetchAllReservations();
  }, []);

 
  const fetchReservationById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/reservations/${id}`);
      setReservationDetails(response.data);
      setStatus(response.data.status); 
    } catch (error) {
      console.error("Error fetching reservation by ID:", error);
    }
  };

  
  const updateReservationStatus = async (id, newStatus) => {
    try {
      const response = await axios.put(`http://localhost:8080/reservations/update/${id}`, { ...reservationDetails, status: newStatus });
      setReservationDetails(response.data);
      setReservations(reservations.map(reservation =>
        reservation.id === id ? response.data : reservation
      ));
    } catch (error) {
      console.error("Error updating reservation status:", error);
    }
  };

  
  const deleteReservationById = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/reservations/delete/${id}`);
      setReservations(reservations.filter(reservation => reservation.id !== id));
      setReservationDetails(null); 
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold mb-5">Reservations</h2>

    
      <div className="bg-white rounded-lg shadow-md p-5 mb-5">
        <h3 className="text-xl font-semibold mb-4">Get Reservation Details by ID</h3>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Enter Reservation ID"
            value={reservationId}
            onChange={(e) => setReservationId(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg w-full"
          />
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-2"
            onClick={() => fetchReservationById(reservationId)}
          >
            Fetch Reservation
          </button>
        </div>

        {reservationDetails && (
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h4 className="text-lg font-semibold">Reservation Details</h4>
            <p><strong>Reservation ID:</strong> {reservationDetails.id}</p>
            <p><strong>Service Type:</strong> {reservationDetails.serviceType}</p>
            <p><strong>User ID:</strong> {reservationDetails.userId}</p>
            <p><strong>Query Text:</strong> {reservationDetails.queryText}</p>
            <p><strong>Status:</strong> {reservationDetails.status}</p>
            <p><strong>Created At:</strong> {new Date(reservationDetails.createdAt).toLocaleString()}</p>
            <p><strong>Updated At:</strong> {new Date(reservationDetails.updatedAt).toLocaleString()}</p>
            <div className="mt-4">
              <h4 className="text-md font-semibold mb-2">Update Status:</h4>
              <input
                type="text"
                placeholder="New Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg w-full mb-2"
              />
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => updateReservationStatus(reservationDetails.id, status)}
              >
                Update Status
              </button>
            </div>
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
              onClick={() => deleteReservationById(reservationDetails.id)}
            >
              Delete Reservation
            </button>
          </div>
        )}
      </div>

      
      <div className="bg-white rounded-lg shadow-md p-5">
        <h3 className="text-xl font-semibold mb-4">All Reservations</h3>
        {reservations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {reservations.map((reservation) => (
              <div key={reservation.id} className="bg-white p-4 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-2">Reservation ID: {reservation.id}</h4>
                <p><strong>Service Type:</strong> {reservation.serviceType}</p>
                <p><strong>Reservation ID:</strong> {reservation.reservationId}</p>
                <p><strong>User ID:</strong> {reservation.userId}</p>
                <p><strong>Query Text:</strong> {reservation.queryText}</p>
                <p><strong>Status:</strong> {reservation.status}</p>
                <p><strong>Created At:</strong> {new Date(reservation.createdAt).toLocaleString()}</p>
                <p><strong>Updated At:</strong> {new Date(reservation.updatedAt).toLocaleString()}</p>
                <button
                  type="button"
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mt-2"
                  onClick={() => deleteReservationById(reservation.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No reservations available</p>
        )}
      </div>
    </div>
  );
};

export default Reservations;
