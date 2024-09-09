import React from 'react';
import Reservations from './Admin/Reservations';
import Queries from './Admin/Queries';
import Payments from './Admin/Payments';
import PaymentList from "./Staff/PaymentList";
const Staff = () => {
    return (
        <div>
             
            <h1>Staff Dashboard</h1>
            <Reservations />
            <Queries />
            <PaymentList />
            <Payments />
            
        </div>
    );
};

export default Staff;
