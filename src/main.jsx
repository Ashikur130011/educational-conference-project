import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Router from './Components/Routers/Router';
import AuthProvider from './Components/Providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={Router} />
    </AuthProvider>
  </React.StrictMode>,
)
