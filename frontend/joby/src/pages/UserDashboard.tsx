import React from 'react';
import JobPostings from '../components/JobPostings';

const UserDashboard: React.FC = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
        <JobPostings />
        {/* Add more user features here */}
    </div>
);

export default UserDashboard;
