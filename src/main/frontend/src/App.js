import React from 'react';
import Signup from './pages/Signup';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./pages/Account";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Items from "./pages/Items";

function App() {
    return (
        <div className="App">
            <ToastContainer />
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/items" element={<Items />} />
                    <Route exact path="/register" element={<Signup />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/account" element={<Profile />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
