import React from 'react';
import { RouterProvider } from 'react-router-dom'; // Import RouterProvider
import AppRoutes from './route/index'; // Import AppRoutes

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={AppRoutes} /> 
    </div>
  );
};

export default App;
