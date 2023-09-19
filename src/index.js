import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './Providers/AuthProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <div className='w-10/12 mx-auto'>
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </div>
    </AuthProvider>
);

