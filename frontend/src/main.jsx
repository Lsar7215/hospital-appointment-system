import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom" 
import { router } from './app/router.jsx'
import './styles/reset.css'
import './styles/base.css'
import './styles/pages.css'
import './styles/pages/home.css'
import './styles/pages/patient.css'



createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
);
