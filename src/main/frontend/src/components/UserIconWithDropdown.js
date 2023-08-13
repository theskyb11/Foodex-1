import React, {useEffect, useState} from 'react';
import UserImage from "./UserImage";
import {Link} from "react-router-dom";
import {GetUser, getUserByEmail} from "../services/getUser";
import logoutUser from "../utils/logoutUser";

const UserIconWithDropdown = () => {
    // State to manage the visibility of the dropdown menu
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect( () => {
         GetUser().then((userData) => {
            if (userData) {
                setUser(userData);
                console.log("Got User");
            }
        });
    }, []);

    // Function to toggle the dropdown menu
    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <div className="relative z-10 font-sans">
            {/* User icon */}
            <button
                className="flex items-center justify-center rounded-full w-10 h-10 bg-blue-500 text-white focus:outline-none"
                onClick={toggleDropdown}
            >
                <UserImage dim="h-10 w-10" />
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg">
                    <div className="p-4">
                        <p><b>{user.name}</b></p>
                        {/*<p className={"text-sm text-gray-400"}>{user.email}</p>*/}
                        <p className={"text-sm text-gray-400"}>{user.username}</p>
                    </div>
                    <hr/>
                    <div className={"flex flex-col w-full my-4"}>
                        <Link className={"px-4 py-2 flex"} aria-current="page" to="/account">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            My Account
                        </Link>
                        <Link className={"px-4 py-2 flex"} aria-current="page" to="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            My Cart
                        </Link>
                        <div className={"px-4 py-2 flex justify-between"} aria-current="page">
                            <div className={"flex"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                </svg>
                                Dark Mode
                            </div>
                            <label className="relative inline-flex cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                    <div
                                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue"></div>
                            </label>
                        </div>
                    </div>
                    <hr />
                    <div className={"flex flex-col my-2 text-rose-500"}>
                        <div className={"px-4 py-2 flex cursor-pointer"} aria-current="page" onClick={logoutUser}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 stroke-rose-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                            </svg>
                            Logout
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserIconWithDropdown;
