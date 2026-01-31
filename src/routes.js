import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminRegisterPage from './pages/admin/AdminRegisterPage';

import DashboardLayout from './layouts/DashboardLayout';
import NewsPage from './pages/user/NewsPage';
import ClapPage from './pages/user/ClapPage';
import GasPage from './pages/user/GasPage';
import VaccinationPage from './pages/user/VaccinationPage';

// Placeholder Pages (to be implemented)
import AdminDashboard from './pages/admin/AdminDashboard';


const ProtectedRoute = ({ children, requiredRole }) => {
    const { user, isAuthenticated } = useAuth();

    if (!isAuthenticated()) {
        return <Navigate to="/login" />;
    }

    if (requiredRole && user.role !== requiredRole) {
        // Redirect to appropriate dashboard based on role or home
        return <Navigate to={user.role === 'admin' ? '/admin/dashboard' : '/dashboard'} />;
    }

    return children;
};

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Admin Public Routes */}
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin/register" element={<AdminRegisterPage />} />

            {/* Protected User Routes */}
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute requiredRole="user">
                        <DashboardLayout />
                    </ProtectedRoute>
                }
            >
                <Route index element={<NewsPage />} />
                <Route path="clap" element={<ClapPage />} />
                <Route path="vacunacion" element={<VaccinationPage />} />
                <Route path="gas" element={<GasPage />} />
                <Route path="historial" element={<div>Historial Placeholder</div>} />
            </Route>

            {/* Protected Admin Routes */}
            <Route
                path="/admin/dashboard/*"
                element={
                    <ProtectedRoute requiredRole="admin">
                        <AdminDashboard />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default AppRoutes;
