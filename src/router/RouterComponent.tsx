import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout'
import AboutUS from '../pages/About/AboutUS'
import Admission from '../pages/Admission/Admission'
import ContactUS from '../pages/Contact/ContactUS'
import Gallary from '../pages/Gallary/Gallary'
import Home from '../pages/Home/Home'
import ProtectedRoute from './ProtectedRoute'

const RouterComponent = (): ReactElement => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
        {/* <Route path="/" element={<Login/>}/> */}
        <Route path="/" element={<DefaultLayout />}>
            <Route 
            index
            element={
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>
            }
            />
        </Route>
        <Route path="/home" element={<DefaultLayout />}>
            <Route 
            index
            element={
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>
            }
            />
        </Route>
        <Route path="/admission" element={<DefaultLayout />}>
            <Route 
            index
            element={
                <ProtectedRoute>
                    <Admission />
                </ProtectedRoute>
            }
            />
        </Route>
        <Route path="/aboutus" element={<DefaultLayout />}>
            <Route 
            index
            element={
                <ProtectedRoute>
                    <AboutUS />
                </ProtectedRoute>
            }
            />
        </Route>
        <Route path="/contactus" element={<DefaultLayout />}>
            <Route 
            index
            element={
                <ProtectedRoute>
                    <ContactUS />
                </ProtectedRoute>
            }
            />
        </Route>
        <Route path="/gallary" element={<DefaultLayout />}>
            <Route 
            index
            element={
                <ProtectedRoute>
                    <Gallary />
                </ProtectedRoute>
            }
            />
        </Route>
    </Routes>
    </BrowserRouter>
)

export default RouterComponent