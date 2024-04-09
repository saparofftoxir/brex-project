import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const Navbar = lazy(() => import("../pages/navbar/Navbar"))
const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/login/Login"));
const Register = lazy(() => import("../pages/register/Register"));
const Contact = lazy(() => import("../pages/contact/Contact"));
function Layout() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='contact' element={<Contact/>} />
            </Routes>
        </>
    )
}

export default Layout