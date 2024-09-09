import React from 'react';
import Dishes from './Admin/Dishes';
import Facilities from './Admin/Facilities';
import Gallery from './Admin/Gallery'
import Offers from './Admin/Offers';
import Payments from './Admin/Payments'
import Queries from './Admin/Queries'
import Reservations from './Admin/Reservations'
import PaymentList from "./Staff/PaymentList";
import Services from './Admin/Services'
import AddRestaurant from './Admin/AddRestaurant';


const Admin = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <Dishes />
            <Facilities />
            <Gallery />
            <Offers />
            <Payments />
            <PaymentList />
            <Reservations />
            <AddRestaurant />
            <Services />
            <Queries />
         
            
           
        </div>
    );
};

export default Admin;