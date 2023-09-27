import React from 'react'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListUser from './components/Listuser.jsx'
import AddUser from './components/Adduser.jsx'

function MainUserUI () {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ListUser />}/>
                <Route path="/adduser" element={<AddUser />}/>
            </Routes>
        </BrowserRouter>
    )
};

export default MainUserUI;
