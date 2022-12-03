import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayoutContainer from './layout/LayoutContainer';
import Home from './pages/Home';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
  ]);
  return (
    <LayoutContainer>
      <RouterProvider router={router} />
    </LayoutContainer>
  );
}
