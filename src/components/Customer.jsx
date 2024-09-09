import React from 'react';
import Services from './Customer/Services'
import DeleteReservation from './Customer/DeleteReservation';
import AllReservations from './Customer/Allreservations';
import AddReservationForm from './Customer/AddReservationForm';
import AddQuery from './Customer/AddQuery';
import ViewQueries from './Customer/ViewQueries';

const Customer = () => {
    return (
        <div>
             
            <h1>Customer Dashboard</h1>
            <AllReservations />
            <AddReservationForm />
            <Services />
            <DeleteReservation />
            <AddQuery />
            <ViewQueries />
        </div>
    );
};

export default Customer;
