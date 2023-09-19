import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Services from './componenents/Home/Services/Services';
import AddICU from './componenents/AddICU/AddICU';
import Allicu from './componenents/Allicu/Allicu';
import Doctors from './componenents/Doctors/Doctors';
import AddDoctors from './componenents/Adddoctors/AddDoctors';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/services",
    element: <Services></Services>,
  },
  {
    path: "/icuadd",
    element: <AddICU></AddICU>,
  },
  {
    path: "/allicu",
    element: <Allicu></Allicu>,
    loader: () => fetch('http://localhost:5000/icu')
  },
  {
    path: "/doctoradd",
    element: <AddDoctors></AddDoctors>,

  },
  {
    path: "/doctors",
    element: <Doctors></Doctors>,
    loader: () => fetch('http://localhost:5000/doctors')
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='w-10/12 mx-auto'>

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
