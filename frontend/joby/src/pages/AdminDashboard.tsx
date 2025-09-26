import React from 'react';
import JobPostings from '../components/JobPostings';

const AdminDashboard: React.FC = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <JobPostings />
        {/* Add more admin features here */}
    </div>
);

export default AdminDashboard;
