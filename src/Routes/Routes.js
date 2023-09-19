import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../componenents/Layout/Main";
import App from "../App";
import Services from "../componenents/Home/Services/Services";
import AddICU from "../componenents/AddICU/AddICU";
import Allicu from "../componenents/Allicu/Allicu";
import AddDoctors from "../componenents/Adddoctors/AddDoctors";
import Doctors from "../componenents/Doctors/Doctors";
import Login from "../componenents/Login/Login";
import Registration from "../componenents/Login/Registration";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
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
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Registration></Registration>
            },
        ]
    },
])