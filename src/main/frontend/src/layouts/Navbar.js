import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import logo from "../assets/img/logo-exp-light.png";
import UserIconWithDropdown from "../components/UserIconWithDropdown";

const Navbar = () => {
    const [location, setLocation] = useState('');
    const url = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isHome, setIsHome] = useState(false);
    const [isTranslucent, setIsTranslucent] = useState(false);

    useEffect(() => {
        let storedIsLoggedIn = localStorage.getItem('isLoggedIn');

        if(!storedIsLoggedIn)
            storedIsLoggedIn = sessionStorage.getItem('isLoggedIn');

        setIsLoggedIn(storedIsLoggedIn === 'true');
        setIsHome(url.pathname === '/home' || url.pathname === '/')

        const handleScroll = () => {
            setIsTranslucent(window.scrollY > 30);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLocationClick = () => {
        if (location !== null && location !== '') {
            // Handle location click event
        } else {
            alert('Please set location');
        }
    };

    const handleLoginClick = () => {
        sessionStorage.setItem('previousLink', url.pathname)
    }

    return (
        <div
            className={`duration-300 ease-in-out transition-colors fixed top-0 w-full z-50 bg-white ${
                isTranslucent ? 'backdrop-blur bg-opacity-80' : ''
            }`}
            id="nav-main"
        >
        <nav className="bg-white border-gray-200 z-50" id={"nav-main"}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={"/"} className="flex items-center">
                    <img src={logo} className="h-8 mr-3" alt="Foodex Logo" />
                </Link>
                <div className="flex md:order-2 items-center">
                    {!isHome && (
                        <div className="relative mr-4">
                            <input
                                type="text"
                                placeholder="Search"
                                className="py-2 pl-10 pr-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue"
                            />
                            <svg className="w-4 h-4 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                 fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </div>
                    )}

                    {isLoggedIn ? (
                        <div>
                            <UserIconWithDropdown />
                        </div>
                        ) : (
                            <div>
                    <Link className={"mx-6 py-2"} aria-current="page" to="/login" onClick={
                        handleLoginClick
                    }>
                        Login
                    </Link>
                    <Link
                        className={"px-4 py-2 text-white bg-gray-800"}
                        aria-current="page"
                        to="/register"
                    >
                        Sign Up
                    </Link>
                            </div>)}
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-cta"
                >

                        {isHome ? (
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                                <li>
                                    <Link className={"px-4 py-2"} aria-current="page" to="/home">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link className={"px-4 py-2"} aria-current="page" to="/about">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link className={"px-4 py-2"} aria-current="page" to="/contact">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link className={"px-4 py-2"} aria-current="page" to="/items">
                                        Items
                                    </Link>
                                </li>
                                <li>
                                    <Link className={"px-4 py-2"} aria-current="page" to="/restaurants">
                                        Restaurants
                                    </Link>
                                </li>
                            </ul>

                        ) : (
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                                <li>
                                    <Link className={"px-4 py-2"} aria-current="page" to="/home">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link className={"px-4 py-2"} aria-current="page" to="/items">
                                        Items
                                    </Link>
                                </li>
                                <li>
                                    <Link className={"px-4 py-2"} aria-current="page" to="/restaurants">
                                        Restaurants
                                    </Link>
                                </li>
                            </ul>
                        )}
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;
