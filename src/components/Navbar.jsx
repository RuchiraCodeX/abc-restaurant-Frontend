import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiRestaurant } from 'react-icons/bi';
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkLoginStatus = () => {
            const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
            setIsLoggedIn(loggedIn);
        };

        checkLoginStatus();

       
    }, []);

    const handleMenuToggle = () => {
        setMenu(!menu);
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('role');
        localStorage.removeItem('redirectUrl');
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <div className="fixed w-full bg-white shadow-lg">
            <div className="flex justify-between items-center p-5 md:px-32 px-5">
                <div className="flex items-center cursor-pointer">
                    <BiRestaurant size={32} />
                    <h1 className="text-xl font-semibold ml-2">ABC Restaurant</h1>
                </div>
                
                

                <nav className={`hidden md:flex flex-row items-center gap-8`}>
                    <Link to="/" className="hover:text-blue-500 transition-all">Home</Link>
                    <Link to="/dishes" className="hover:text-blue-500 transition-all">Dishes</Link>
                    <Link to="/about" className="hover:text-blue-500 transition-all">About</Link>
                    <Link to="/services" className="hover:text-blue-500 transition-all">Services</Link>
                    <Link to="/menu" className="hover:text-blue-500 transition-all">Menu</Link>
                   
                    
                    {!isLoggedIn && (
                        <Link to="/login" className="hover:text-blue-500 transition-all">Login</Link>
                    )}

                    {isLoggedIn && (
                        <button onClick={handleLogout} className="font-bold px-5 py-1 border border-black rounded hover:bg-gray-100">
                            Login
                        </button>
                    )}
                </nav>

                <div onClick={handleMenuToggle} className="md:hidden flex items-center">
                    {menu ? <AiOutlineClose size={30} /> : <AiOutlineMenuUnfold size={30} />}
                </div>
            </div>

            {menu && (
                <nav className="md:hidden fixed top-0 left-0 w-full bg-white shadow-lg p-5 flex flex-col gap-5">
                    <Link to="/" onClick={handleMenuToggle} className="text-lg font-medium">Home</Link>
                    <Link to="/dishes" onClick={handleMenuToggle} className="text-lg font-medium">Dishes</Link>
                    <Link to="/about" onClick={handleMenuToggle} className="text-lg font-medium">About</Link>
                    <Link to="/services" onClick={handleMenuToggle} className="text-lg font-medium">Services</Link>
                    <Link to="/menu" onClick={handleMenuToggle} className="text-lg font-medium">Menu</Link>
                   

                    {!isLoggedIn && (
                         <button onClick={handleLogout} className="font-bold px-5 py-1 border border-black rounded hover:bg-gray-100">
                         Login
                     </button>
                        
                    )}

                    {isLoggedIn && (
                       <Link to="/login" onClick={handleMenuToggle} className="hover:text-blue-500 transition-all">Login</Link>
                    )}
                </nav>
            )}
        </div>
    );
};

export default Navbar;
