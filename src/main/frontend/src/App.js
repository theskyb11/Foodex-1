import React from 'react';
import SignUpForm from './SignUpForm';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./Profile";
import MainContainer from "./home";
import ContactForm from "./ContactForm";
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<MainContainer />} />
                    <Route exact path="/contact" element={<ContactForm />} />
                    <Route exact path="/register" element={<SignUpForm />} />
                    <Route exact path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
