import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayoutContainer from './layout/LayoutContainer';
import Home from './pages/Home';
import AddNewContact from './pages/AddNewContact';
import EditContact from './pages/EditContact';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/add-new-contact',
      element: <AddNewContact />,
    },
    {
      path: '/edit-contact/:id',
      element: <EditContact />,
    },
  ]);
  return (
    <LayoutContainer>
      <RouterProvider router={router} />
    </LayoutContainer>
  );
}
