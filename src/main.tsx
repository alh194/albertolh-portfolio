import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Course from './pages/Course'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'courses', element: <Courses /> },
      { path: 'courses/:slug', element: <Course /> },
      // añade más páginas aquí:
      // { path: 'projects', element: <Projects /> },
      // { path: 'blog', element: <Blog /> },
      // { path: 'contact', element: <Contact /> },
      { path: '*', element: <div style={{padding:24}}>404 — No encontrado</div> }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><RouterProvider router={router} /></React.StrictMode>
)
