import { createBrowserRouter } from "react-router-dom";
import AppShell from "./AppShell";

import Doctors from '../pages/Doctors';
import Doctor from '../pages/Doctor'
import Signup from '../pages/Signup'
import Login from '../pages/Login';
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        element:<AppShell/>,
        children:[
            {path:"/", element:<Home />},
            {path:"/doctors", element:<Doctors/>},
            {path:"/doctor", element:<Doctor/>},
            {path:"/signup", element:<Signup/>},
            {path:"/login", element:<Login/>},

        ]
    }
])