import React, { useEffect, useState } from "react";

interface JobPosting {
    id: number;
    title: string;
    min_salary: number;
    max_salary: number;
    city: string;
    created_by?: string;
    start_date?: string;
    interview_date?: string;
}

const JobPostings: React.FC = () => {
    const [jobs, setJobs] = useState<JobPosting[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch("http://localhost:8000/api/job-postings", {
                    headers: {
                        Accept: "application/json",
                    },
                });
                if (!res.ok) throw new Error("Failed to fetch job postings");
                const data = await res.json();
                setJobs(data.data || data); // Adjust if your API response structure differs
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div style={{ color: "red" }}>{error}</div>;

    return (
        <div className="bg-white rounded-xl shadow-card overflow-auto mt-6">
            <table className="min-w-full divide-y divide-gray200">
                <thead className="bg-gray100">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-textLight uppercase">
                            Job Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-textLight uppercase">
                            Salary Range
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-textLight uppercase">
                            City
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-textLight uppercase">
                            Created By
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-textLight uppercase">
                            Start Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-textLight uppercase">
                            Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-textLight uppercase">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray200">
                    {jobs.map((job) => (
                        <tr key={job.id} className="hover:bg-gray100">
                            <td className="px-6 py-4 text-textDark">{job.title}</td>
                            <td className="px-6 py-4 text-textDark">{job.min_salary} - {job.max_salary}</td>
                            <td className="px-6 py-4 text-textDark">{job.city}</td>
                            <td className="px-6 py-4 text-textDark">{job.created_by}</td>
                            <td className="px-6 py-4 text-textDark">{job.start_date}</td>
                            <td className="px-6 py-4 text-textDark">{job.interview_date}</td>
                            <td className="px-6 py-4 text-primary cursor-pointer">Edit</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default JobPostings;