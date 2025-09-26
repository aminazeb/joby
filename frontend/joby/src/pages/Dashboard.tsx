import React, { useEffect, useState } from 'react';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';

const Dashboard: React.FC = () => {
    const [role, setRole] = useState<string>('user');

    useEffect(() => {
        setRole(localStorage.getItem('role') ?? 'user');
    }, []);

    return role === 'admin' ? <AdminDashboard /> : <UserDashboard />;
};

export default Dashboard;
