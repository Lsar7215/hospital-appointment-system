import { createBrowserRouter } from "react-router-dom";
import AppShell from "./AppShell";

import Doctors from '../pages/public/Doctors';
import Doctor from '../pages/public/Doctor'
import Signup from '../pages/public/Signup'
import Login from '../pages/public/Login';
import Home from "../pages/public/Home";
import Dashboard from "../pages/patient/PatientDashboard";
import Account from "../pages/patient/Account"

export const router = createBrowserRouter([
    {
        element:<AppShell/>,
        children:[
            {path:"/", element:<Home />},
            {path:"/doctors", element:<Doctors/>},
            {path:"/doctor", element:<Doctor/>},
            {path:"/signup", element:<Signup/>},
            {path:"/login", element:<Login/>},
            {path:"/dashboard", element:<Dashboard/>},
            {path:"/account", element:<Account/>}

        ]
    }
])