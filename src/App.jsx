import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import Dishes from "./components/Dishes";
import ReviewsList from "./components/ReviewsList";
import Admin from "./components/Admin";
import Facility from "./components/Facility";
import Login from "./components/Login/Login";
import MainLayout from "./components/MainLayout";
import PhotoGallery from "./components/PhotoGallery";
import Customer from "./components/Customer";
import RegistrationForm from "./components/Register/RegistrationForm";
import Staff from "./components/Staff";
import RestaurantList from "./components/Admin/RestaurantList";
import Menu from "./components/Menu";
import About2 from "./components/About2";
import Search from "./components/Customer/Search";
import ServicesList from "./components/ServicesList";




const App = () => {
  return (
    <Router>
      
      <Navbar />
      <Routes>
      
                <Route path="/" element={<MainLayout><Home /><Search /><Dishes /><About /><Facility title="Facilities" rowsCount={1} slidesPerView={3} /><h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">Restaurants</h1><RestaurantList /><Offers /><PhotoGallery /><ReviewsList /> <Footer /></MainLayout>} />
                <Route path="/login" element={<MainLayout><Login /><RegistrationForm /></MainLayout>} />
                <Route path="/admin/dashboard"element={<MainLayout><Admin /></MainLayout>}/>
                <Route path="/customer/dashboard"element={<MainLayout><Customer /></MainLayout>}/>
                <Route path="/staff/dashboard"element={<MainLayout><Staff /></MainLayout>}/>
                <Route path="/menu"element={<MainLayout><Menu /></MainLayout>}/>
                <Route path="/dishes"element={<MainLayout><Dishes /></MainLayout>}/>
                <Route path="/services"element={<MainLayout><ServicesList /></MainLayout>}/>
                <Route path="/about"element={<MainLayout><About2 /></MainLayout>}/>
               
                
     
      </Routes>
      

     
    </Router>
  );
};

export default App;
