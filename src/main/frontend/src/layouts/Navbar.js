import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from "../assets/img/logo-exp-light.png";

const Navbar = () => {
    const [location, setLocation] = useState('');
    // const [cardHidden, setCardHidden] = useState(true);

    // const toggleCard = () => {
    //   setCardHidden(!cardHidden);
    // };

    const handleLocationClick = () => {
        if (location !== null && location !== '') {
            // Handle location click event
        } else {
            alert('Please set location');
        }
    };

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
                    <Link className={"mx-6 py-2"} aria-current="page" to="/login">
                        Login
                    </Link>
                    <Link
                        className={"px-4 py-2 text-white bg-gray-800"}
                        aria-current="page"
                        to="/register"
                    >
                        Sign Up
                    </Link>
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
