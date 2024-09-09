import React, { useState, useEffect } from "react";
import axios from "axios";

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [newPayment, setNewPayment] = useState({
    amount: "",
    method: "",
    status: "",
  });
  const [paymentId, setPaymentId] = useState("");
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [updateStatus, setUpdateStatus] = useState("");

  
  const handleAddPayment = async () => {
    try {
      const response = await axios.post("http://localhost:8080/payments", newPayment, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setPayments([...payments, response.data]);
      setNewPayment({ amount: "", method: "", status: "" });
    } catch (error) {
      console.error("Error adding payment:", error);
    }
  };

 
  const handleUpdatePayment = async (paymentId, paymentData) => {
    if (!paymentId) {
      console.error("Payment ID is missing");
      return;
    }
    try {
      const response = await axios.put(`http://localhost:8080/payments/update/${paymentId}`, paymentData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Payment updated successfully", response.data);
      setPaymentDetails(response.data); 
    } catch (error) {
      console.error("Error updating payment:", error);
    }
  };

  
  const fetchPaymentDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/payments/${id}`);
      setPaymentDetails(response.data);
    } catch (error) {
      console.error("Error fetching payment details:", error);
    }
  };

  
  const handleInputChange = (e) => {
    setNewPayment({ ...newPayment, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold mb-5">Payments</h2>

    
      <div className="bg-white rounded-lg shadow-md p-5 mb-5">
        <h3 className="text-xl font-semibold mb-4">Get Payment Details</h3>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Enter Payment ID"
            value={paymentId}
            onChange={(e) => setPaymentId(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg w-full"
          />
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-2"
            onClick={() => fetchPaymentDetails(paymentId)}
          >
            Fetch Payment
          </button>
        </div>

       
        {paymentDetails && (
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h4 className="text-lg font-semibold">Payment ID: {paymentDetails.id}</h4>
            <p><strong>Amount:</strong> {paymentDetails.amount}</p>
            <p><strong>Method:</strong> {paymentDetails.method}</p>
            <p><strong>Status:</strong> {paymentDetails.status}</p>

           
            <div className="mt-4">
              <h4 className="text-lg font-semibold">Update Status</h4>
              <input
                type="text"
                placeholder="New Status"
                value={updateStatus}
                onChange={(e) => setUpdateStatus(e.target.value)}
                className="border border-gray-300 p-3 rounded-lg w-full"
              />
              <button
                type="button"
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mt-2"
                onClick={() => handleUpdatePayment(paymentDetails.id, { status: updateStatus })}
              >
                Update Status
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payments;
