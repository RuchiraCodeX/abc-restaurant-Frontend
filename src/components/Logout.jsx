import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('role');
        localStorage.removeItem('redirectUrl');
        navigate('/login'); 
    };

    return (
        <button
            onClick={handleLogout}
            className='font-bold px-5 py-1 border-[2px] border-[black] rounded hover:bg-slate-100 mt-4'
        >
            Logout
        </button>
    );
};

export default Logout;
