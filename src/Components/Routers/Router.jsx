import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root/Root';
import Home from '../Home/Home'
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import NewsDetails from '../NewsDetails/NewsDetails';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,

        children: [
            {
                path: "/",
                element: <Home/>,
                loader: () => fetch(`education.json`)
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/services',
                element: <Services/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/news/:id',
                element: <NewsDetails/>
            },

        ]
    }
])

export default Router;