import React, { useState } from 'react';

const AddReservationForm = () => {
    const [userID, setUserID] = useState('');
    const [serviceType, setServiceType] = useState('DINE_IN');
    const [restaurantId, setRestaurantId] = useState('');
    const [reservationDate, setReservationDate] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [paymentId, setPaymentId] = useState('');
    const [amount, setAmount] = useState('');
    const [method, setMethod] = useState('Credit Card');
    const [currency, setCurrency] = useState('USD');
    const [status, setStatus] = useState('Completed');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reservationData = {
            reservation: {
                userID,
                serviceType,
                restaurantId,
                reservationDate,
                numberOfGuests,
            },
            payment: {
                paymentId,
                amount: parseFloat(amount),
                method,
                currency,
                status,
            }
        };

        try {
            const response = await fetch('http://localhost:8080/reservations/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reservationData),
            });

            if (response.ok) {
                setMessage('Reservation added successfully!');
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred while adding the reservation.');
        }
    };

    return (
        <div className="w-[90%] p-5 shadow-lg flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-7">Add Reservation</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
                <div className="relative w-[90%] border p-3 border-gray-400 rounded-[5px] m-3">
                    <label className="absolute top-[-12px] left-2 bg-white px-1 font-semibold text-sm">
                        Username
                    </label>
                    <input
                        className="outline-none w-full"
                        type="text"
                        value={userID}
                        onChange={(e) => setUserID(e.target.value)}
                        required
                    />
                </div>
                <div className="relative w-[90%] border p-3 border-gray-400 rounded-[5px] m-3">
                    <label className="absolute top-[-12px] left-2 bg-white px-1 font-semibold text-sm">
                        Service Type
                    </label>
                    <select
                        className="outline-none w-full"
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                    >
                        <option value="DINE_IN">Dine In</option>
                        <option value="TAKE_AWAY">Take Away</option>
                    </select>
                </div>
                <div className="relative w-[90%] border p-3 border-gray-400 rounded-[5px] m-3">
                    <label className="absolute top-[-12px] left-2 bg-white px-1 font-semibold text-sm">
                        Restaurant
                    </label>
                    <input
                        className="outline-none w-full"
                        type="text"
                        value={restaurantId}
                        onChange={(e) => setRestaurantId(e.target.value)}
                        required
                    />
                </div>
                <div className="relative w-[90%] border p-3 border-gray-400 rounded-[5px] m-3">
                    <label className="absolute top-[-12px] left-2 bg-white px-1 font-semibold text-sm">
                        Reservation Date
                    </label>
                    <input
                        className="outline-none w-full"
                        type="datetime-local"
                        value={reservationDate}
                        onChange={(e) => setReservationDate(e.target.value)}
                        required
                    />
                </div>
                <div className="relative w-[90%] border p-3 border-gray-400 rounded-[5px] m-3">
                    <label className="absolute top-[-12px] left-2 bg-white px-1 font-semibold text-sm">
                        Number of Guests
                    </label>
                    <input
                        className="outline-none w-full"
                        type="number"
                        value={numberOfGuests}
                        onChange={(e) => setNumberOfGuests(e.target.value)}
                        required
                    />
                </div>

              
                <h2 className="text-2xl font-bold mt-5">Payment Information</h2>
              
                <div className="relative w-[90%] border p-3 border-gray-400 rounded-[5px] m-3">
                    <label className="absolute top-[-12px] left-2 bg-white px-1 font-semibold text-sm">
                        Amount
                    </label>
                    <input
                        className="outline-none w-full"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <div className="relative w-[90%] border p-3 border-gray-400 rounded-[5px] m-3">
                    <label className="absolute top-[-12px] left-2 bg-white px-1 font-semibold text-sm">
                        Payment Method
                    </label>
                    <select
                        className="outline-none w-full"
                        value={method}
                        onChange={(e) => setMethod(e.target.value)}
                    >
                        <option value="Credit Card">Credit Card</option>
                        <option value="PayPal">PayPal</option>
                        <option value="Cash">Cash</option>
                    </select>
                </div>
                <div className="relative w-[90%] border p-3 border-gray-400 rounded-[5px] m-3">
                    <label className="absolute top-[-12px] left-2 bg-white px-1 font-semibold text-sm">
                        Currency
                    </label>
                    <input
                        className="outline-none w-full"
                        type="text"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        required
                    />
                </div>
                <div className="relative w-[90%] border p-3 border-gray-400 rounded-[5px] m-3">
                    <label className="absolute top-[-12px] left-2 bg-white px-1 font-semibold text-sm">
                        Payment Status
                    </label>
                    <select
                        className="outline-none w-full"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                    </select>
                </div>
                {message && <p className="text-green-500 mt-2">{message}</p>}
                <button
                    type="submit"
                    className="font-bold px-5 py-1 border-[2px] border-[black] rounded hover:bg-slate-100 mt-4"
                >
                    Add Reservation
                </button>
            </form>
        </div>
    );
};

export default AddReservationForm;
