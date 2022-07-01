import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SimpleUserDetail from './pages/UserDetails';
import AdminUserDetails from './pages/AdminUserDetails';


const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/simple" element={<SimpleUserDetail />} />
            <Route path="/admin" element={<AdminUserDetails />} />
        </Routes>
    )
}
export default Routers;