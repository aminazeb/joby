import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';

const AppRouter: React.FC = () => (
    <Router>
        <nav style={{ marginBottom: 20 }}>
            <Link to="/">Home</Link> |{' '}
            <Link to="/register">Register</Link> |{' '}
            <Link to="/dashboard">Dashboard</Link> |{' '}
            <Link to="/login">Login</Link> |{' '}
            <Link to="/logout">Logout</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
        </Routes>
    </Router>
);

export default AppRouter;
