import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({ username, password }),
                credentials: 'include'
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('role', data.role);
                localStorage.setItem('redirectUrl', data.redirectUrl || '/');
                
                if (data.redirectUrl) {
                    navigate(data.redirectUrl);
                } else {
                    navigate('/'); 
                }
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Login failed. Please check your credentials.');
            }
        } catch (error) {
            setError('An error occurred during login. Please try again later.');
            console.error('Error during login:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='bg-white p-8 m-16 rounded-lg shadow-lg w-full max-w-md'>
                <h1 className='text-2xl font-bold mb-6 text-center'>Login</h1>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div className='relative'>
                        <label className='absolute top-[-10px] left-2 bg-white px-1 text-gray-700 text-sm font-medium'>
                            Username
                        </label>
                        <input
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className='relative'>
                        <label className='absolute top-[-10px] left-2 bg-white px-1 text-gray-700 text-sm font-medium'>
                            Password
                        </label>
                        <input
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className='text-red-500 text-center'>{error}</p>}
                    <button
                        type='submit'
                        className={`w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
