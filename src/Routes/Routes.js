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
import PrivateRoute from "./PrivateRoute";
import Secret from "../componenents/Secret/Secret";
import AddMedicine from "../componenents/Medicine/AddMedicine";
import AllMedicine from "../componenents/Medicine/AllMedicine";
import AddDiagnostic from "../componenents/Diagnostic/AddDiagnostic";
import AllDiagnostic from "../componenents/Diagnostic/AllDiagnostic";

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
                loader: () => fetch('https://icubd-server.vercel.app/icu')
            },
            {
                path: "/doctoradd",
                element: <AddDoctors></AddDoctors>,

            },
            {
                path: "/doctors",
                element: <PrivateRoute><Doctors></Doctors></PrivateRoute>,
                loader: () => fetch('https://icubd-server.vercel.app/doctors')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Registration></Registration>
            },
            {
                path: "/medicine",
                element: <AddMedicine></AddMedicine>
            },
            {
                path: "/allmedicine",
                element: <AllMedicine></AllMedicine>,
                loader: () => fetch('https://icubd-server.vercel.app/medicine')
            },
            {
                path: "/lab",
                element: <AddDiagnostic></AddDiagnostic>
            },
            {
                path: "/alllab",
                element: <AllDiagnostic></AllDiagnostic>,
                loader: () => fetch('https://icubd-server.vercel.app/lab')
            },
            {
                path: "/secret",
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            },
        ]
    },
])