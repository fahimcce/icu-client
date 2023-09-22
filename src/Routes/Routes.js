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
import AddBlood from "../componenents/Blood/AddBlood";
import AllBlood from "../componenents/Blood/AllBlood";
import AddAmbulance from "../componenents/Ambulance/AddAmbulance";
import ShowAmbulance from "../componenents/Ambulance/ShowAmbulance";
import UpdateICU from "../componenents/Allicu/UpdateICU";
import UpdateDoctor from "../componenents/Doctors/UpdateDoctor";
import UpdateMedicine from "../componenents/Medicine/UpdateMedicine";

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
            {
                path: "/medicine",
                element: <AddMedicine></AddMedicine>
            },
            {
                path: "/allmedicine",
                element: <AllMedicine></AllMedicine>,
                loader: () => fetch('http://localhost:5000/medicine')
            },
            {
                path: "/lab",
                element: <AddDiagnostic></AddDiagnostic>
            },
            {
                path: "/alllab",
                element: <AllDiagnostic></AllDiagnostic>,
                loader: () => fetch('http://localhost:5000/lab')
            },
            {
                path: "/addBlood",
                element: <AddBlood></AddBlood>,
            },
            {
                path: "/allBlood",
                element: <PrivateRoute><AllBlood></AllBlood></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/donar')
            },

            {
                path: "/secret",
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            },
            {
                path: "/addAmbulance",
                element: <AddAmbulance></AddAmbulance>,
            },
            {
                path: "/allAmbulance",
                element: <ShowAmbulance></ShowAmbulance>,
                loader: () => fetch('http://localhost:5000/ambulance')
            },
            {
                path: "/update/icu/:id",
                element: <UpdateICU></UpdateICU>,
                loader: ({ params }) => fetch(`http://localhost:5000/update/icu/${params.id}`)
            },
            {
                path: "/update/doctor/:id",
                element: <UpdateDoctor></UpdateDoctor>,
                loader: ({ params }) => fetch(`http://localhost:5000/update/doctor/${params.id}`)
            },
            {
                path: "/update/medicine/:id",
                element: <UpdateMedicine></UpdateMedicine>,
                loader: ({ params }) => fetch(`http://localhost:5000/update/medicine/${params.id}`)
            },
        ]
    },
])