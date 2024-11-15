import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainDashboard from './dashboard';
import Home from '../pages/home';

export const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainDashboard />, // Main layout/dashboard
        children: [
            {
                index: true, // Default child route
                element: <Home />, // Halaman Home
            },
        ],
    },
]);

export default AppRoutes;
