import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom" 
import { router } from './app/router.jsx'
import './styles/reset.css'
import './styles/base.css'
import './styles/pages.css'
import './styles/pages/home.css'
import './styles/pages/patient.css'
import './styles/pages/doctor.css'



createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
);
