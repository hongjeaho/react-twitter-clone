import React from 'react'
import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import BaseLayout from '@/component/layout/BaseLayout'
import Home from '@/views/Home'
import Auth from '@/views/Auth'
import EditProfile from '@/views/EditProfile'
import Profile from '@/views/Profile'
import PrivateRoute from './PrivateRoute'

const router: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: 'auth',
        element: <Auth />,
      },
      {
        path: 'editProfile',
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]

export default createBrowserRouter(router)
