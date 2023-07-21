import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import logo from '../assets/img/logo-exp-light.png'
import Typewriter from "typewriter-effect";
import Footer from "../layouts/Footer";
import img_hero from '../assets/img/img-hero.png'
import banner1 from '../assets/img/banner 1.png'
import banner2 from '../assets/img/banner 2.png'
const Home = () => {
    const [location, setLocation] = useState('');

    const findMyCoordinates = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    const bdcApi = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`;
                    getApi(bdcApi);
                },
                (err) => {
                    alert(err.message);
                }
            );
        } else {
            alert('Geolocation is not supported by your browser');
        }
    };

    const getApi = (bdcApi) => {
        fetch(bdcApi)
            .then((response) => response.json())
            .then((results) => {
                const finalLocation =
                    results.locality +
                    ', ' +
                    results.city +
                    ', ' +
                    results.principalSubdivision +
                    ', ' +
                    results.countryName;
                setLocation(finalLocation);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleLoginClick = () => {
        localStorage.setItem('previousLink', 'home')
    }

    return (
        // <div className="main-container">
        //     <div className="container-fluid jumbotron">
        //         <div className="row">
        //             <div className="col">
        //                 <h2 className="header-main">
        //                     Satisfying Your Cravings, One Delivery at a Time
        //                 </h2>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col search-container">
        //                 <form
        //                     action="setlocation"
        //                     method="post"
        //                     className="search-loc-form"
        //                 >
        //                     <button
        //                         className="gps-button"
        //                         id="gps-button"
        //                         style={{ marginRight: '10px' }}
        //                         type="button"
        //                         onClick={findMyCoordinates}
        //                     >
        //                         <FontAwesomeIcon icon={faMapMarkerAlt} />
        //                     </button>
        //                     <input
        //                         type="search"
        //                         placeholder="Search for your Location"
        //                         className="search-loc"
        //                         id="search-loc"
        //                         name="location"
        //                         value={location}
        //                         onChange={(e) => setLocation(e.target.value)}
        //                     />
        //                     <button className="go-button" id="go-button" type="submit">
        //                         <FontAwesomeIcon icon={faArrowAltCircleRight} />
        //                     </button>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        //     <Footer />
        // </div>

        <div className={"h-screen scroll-smooth"}>
            <nav className="bg-white border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={"/"} className="flex items-center">
                        <img src={logo} className="h-8 mr-3" alt="Foodex Logo"/>
                    </Link>
                    <div className="flex md:order-2">
                        <button data-collapse-toggle="navbar-cta" type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                        <Link className={"mx-6 py-2"} aria-current="page" to="/login"
                        onClick={handleLoginClick}>
                            Login
                        </Link>
                        <Link className={"px-4 py-2 text-white bg-gray-800"} aria-current="page"
                              to="/register">
                            Sign Up
                        </Link>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                         id="navbar-cta">
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
                    </div>
                </div>
            </nav>

            <section className="h-full">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-sans font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                            <Typewriter
                                options={{
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Order, Eat, Repeat")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Flavour, Delivered")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Crave. Click. Enjoy.")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Eat Easy, Eat Well")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Savor Every Bite.")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .start();
                                }}
                            />
                        </h1>
                        <p className="max-w-2xl pt-4 mb-6 font-sans font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Explore
                            our extensive collection of restaurants.</p>
                        <form>
                            <div className="flex">
                                <button id="dropdown-button" data-dropdown-toggle="dropdown"
                                        onClick={findMyCoordinates}
                                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 hover:bg-gray-200 focus:outline-none"
                                        type="button">
                                    <svg className={"h-5 w-5 fill-gray-500 mr-2"} xmlns="http://www.w3.org/2000/svg" height="48"
                                         viewBox="0 -960 960 960" width="48">
                                        <path
                                            d="M450-42v-75q-137-14-228-105T117-450H42v-60h75q14-137 105-228t228-105v-75h60v75q137 14 228 105t105 228h75v60h-75q-14 137-105 228T510-117v75h-60Zm30-134q125 0 214.5-89.5T784-480q0-125-89.5-214.5T480-784q-125 0-214.5 89.5T176-480q0 125 89.5 214.5T480-176Zm0-154q-63 0-106.5-43.5T330-480q0-63 43.5-106.5T480-630q63 0 106.5 43.5T630-480q0 63-43.5 106.5T480-330Zm0-60q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26Zm0-90Z"/>
                                    </svg>
                                    Detect
                                </button>
                                <div className="relative w-80">
                                    <input type="text"
                                           className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:outline-none"
                                           id="search-loc"
                                           name="location"
                                           value={location}
                                           onChange={(e) => setLocation(e.target.value)} required/>
                                    <button type="submit"
                                            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-gray-800 border border-gray-300 hover:bg-blue-800 focus:ring-4 focus:outline-none">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={img_hero} alt={"Dishes"} className={"scale-125"}/>
                    </div>
                </div>
            </section>

            <section className="h-full">

            </section>
            <Footer/>
        </div>
    );
};

export default Home;