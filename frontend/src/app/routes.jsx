/* eslint-disable */
import { ErrorPage } from 'pages/error';
import { HomePage } from 'pages/home';
import { LoginPage } from 'pages/login';
import { createBrowserRouter } from 'react-router-dom';
import { SignupPage } from 'pages/signup';
import { MainLayout } from './layouts/main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/signup', element: <SignupPage /> },
    ],
  },
]);
