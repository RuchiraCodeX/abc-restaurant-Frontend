import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentList = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await axios.get('http://localhost:8080/payments/all');
                setPayments(response.data);
            } catch (error) {
                console.error('Error fetching payments:', error);
            }
        };

        fetchPayments();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">Payment Details</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {payments.map(payment => (
                    <div key={payment.id} className="bg-white p-4 rounded-lg shadow-lg">
                        <h4 className="text-lg font-semibold mb-2">Payment ID: {payment.id}</h4>
                        <p><strong>Reservation ID:</strong> {payment.reservationId}</p>
                        <p><strong>Amount:</strong> ${payment.amount.toFixed(2)}</p>
                        <p><strong>Status:</strong> {payment.status}</p>
                        <p><strong>Method:</strong> {payment.paymentMethod}</p>
                        <p><strong>Date:</strong> {new Date(payment.paymentDate).toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PaymentList;
