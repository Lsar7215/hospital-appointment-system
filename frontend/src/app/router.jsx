import { createBrowserRouter } from "react-router-dom";
import AppShell from "./AppShell";

import Doctors from '../pages/patient/Doctors';
import Doctor from '../pages/public/Doctor'
import Signup from '../pages/public/Signup'
import Login from '../pages/public/Login';
import Home from "../pages/public/Home";
import Dashboard from "../pages/patient/PatientDashboard";
import Account from "../pages/patient/Account"
import Appointments from "../pages/doctor/Appointments";
import Schedule from "../pages/doctor/Schedule"

export const router = createBrowserRouter([
    {
        element:<AppShell/>,
        children:[
            // Public
            {path:"/", element:<Home />},
            {path:"/doctors", element:<Doctors/>},
            {path:"/doctor/:id", element:<Doctor/>},
            // {path:"/doctor/:id", element:<Doctor/>},
            {path:"/signup", element:<Signup/>},
            {path:"/login", element:<Login/>},
            // Patient
            {path:"/patient/dashboard", element:<Dashboard/>},
            {path:"/patient/doctors", element:<Doctors/>},
            {path:"/patient/doctor/:id", element:<Doctor/>},
            {path:"/patient/account", element:<Account/>},
            // Doctor 
            {path:"/doctorpage/appointments", element:<Appointments/>},
            {path:"/doctorpage/schedule", element:<Schedule/>},
        ]
    }
])