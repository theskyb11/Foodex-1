import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import logo from "../assets/img/logo-exp-light.png";

const Navbar = () => {
    const [location, setLocation] = useState('');
    // const [cardHidden, setCardHidden] = useState(true);

    // const toggleCard = () => {
    //   setCardHidden(!cardHidden);
    // };

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the 'isLoggedIn' variable exists in localStorage
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(storedIsLoggedIn === 'true');
    }, []);

    const handleLocationClick = () => {
        if (location !== null && location !== '') {
            // Handle location click event
        } else {
            alert('Please set location');
        }
    };

    const handleLoginClick = () => {
        localStorage.setItem('previousLink', 'account')
    }

    return (
        <nav className="bg-white border-gray-200" id={"nav-main"}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={"/"} className="flex items-center">
                    <img src={logo} className="h-8 mr-3" alt="Foodex Logo" />
                </Link>
                <div className="flex md:order-2 items-center">
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

                    {isLoggedIn ? (
                        <div>
                            <div className="relative">
                                <button
                                    id="dropdownUserAvatarButton"
                                    data-dropdown-toggle="dropdownAvatar"
                                    className="flex items-center mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    type="button"
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src=""
                                        alt="user photo"
                                    />
                                </button>

                                <div
                                    id="dropdownAvatar"
                                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-full right-0"
                                >
                                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                        <div>Bonnie Green</div>
                                        <div className="font-medium truncate">name@flowbite.com</div>
                                    </div>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownUserAvatarButton">
                                        <li>
                                            <a href="#"
                                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                        </li>
                                    </ul>
                                    <div className="py-2">
                                        <a href="#"
                                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                                            out</a>
                                    </div>
                                </div>
                            </div>
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
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
