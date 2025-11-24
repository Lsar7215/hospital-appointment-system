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

const basename = "/doctor-appointment-system";

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
], { basename: basename })

function NotFound() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">The page you are looking for does not exist.</p>
      <a 
        href="/doctor-appointment-system/" 
        className="text-blue-600 hover:text-blue-800 underline"
      >
        Go back to Home
      </a>
    </div>
  );
}