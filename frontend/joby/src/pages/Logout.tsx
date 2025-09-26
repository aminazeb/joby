import React from 'react';

const Logout: React.FC = () => {
    const handleLogout = async () => {
        // Replace with your API endpoint
        const res = await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        });
        if (res.ok) {
            localStorage.removeItem('token');
            alert('Logged out!');
            // Redirect to login or home
        } else {
            alert('Logout failed');
        }
    };

    return (
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
