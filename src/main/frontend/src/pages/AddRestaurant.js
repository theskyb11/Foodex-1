import TopLoadingBar from "../components/TopLoadingBar";
import Navbar from "../layouts/Navbar";
import CheckLogin from "../components/CheckLogin";
import {useState} from "react";
import Map from "../features/addRestaurant/Map";

const AddRestaurant = () => {
    const [isRestaurantAccordionOpen, setIsRestaurantAccordionOpen] = useState(false);
    const [isContactAccordionOpen, setIsContactAccordionOpen] = useState(false);
    const [isTypeAccordionOpen, setIsTypeAccordionOpen] = useState(false);
    const [isCuisineAccordionOpen, setIsCuisineAccordionOpen] = useState(false);

    const [isHoursAccordionOpen, setIsHoursAccordionOpen] = useState(false);
    const [isImagesAccordionOpen, setIsImagesAccordionOpen] = useState(false);

    const [resName, setResName] = useState('');
    const [resAddress, setResAddress] = useState('');
    const [resId, setResId] = useState('');
    const [mobNo, setMobNo] = useState('');
    const [manName, setManName] = useState('');
    const [manEmail, setManEmail] = useState('');
    const [manNo, setManNo] = useState('');
    const [type, setType] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [openingTime, setOpeningTime] = useState('');
    const [closingTime, setClosingTime] = useState('');
    const [file, setFile] = useState('');

    const submitRestaurant = (event) => {
        event.preventDefault()
    }

    return (
        <div className={"font-sans"}>
            <CheckLogin/>
            <TopLoadingBar/>
            <Navbar/>
            <div className="flex items-center justify-center z-10">
                <form onSubmit={submitRestaurant} id="form" encType="multipart/form-data" action="#" method="POST">
                    <div className="">
                        <br/><br/><br/><br/>
                        <div className="mb-4">
                            {isRestaurantAccordionOpen ? (
                                <div className="bg-white mt-4 p-4 border border-gray-300 rounded shadow">
                                    <div className={"flex justify-between"}>
                                        <div>
                                            <h4 className="font-bold text-lg">1. Restaurant Details</h4>
                                            <p className="text-gray-400 text-sm font-light">Name, Address and
                                                Location</p>
                                        </div>
                                        <div>
                                            <button type={"button"}
                                                    onClick={() => setIsRestaurantAccordionOpen(!isRestaurantAccordionOpen)}
                                            >
                                                {isRestaurantAccordionOpen ?
                                                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                          className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                                                        </svg>
                                                    ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                              viewBox="0 0 24 24" strokeWidth={1.5}
                                                              stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                                        </svg>
                                                    )}
                                            </button>
                                        </div>
                                    </div>
                                    <br/>
                                    <input
                                        type="text"
                                        id="name"
                                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                                        placeholder="Restaurant Name*"
                                        name="a"
                                        value={}
                                        onChange={}
                                    /><br/>
                                    <input type="text" id="address"
                                           className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                                           placeholder="Restaurant Address" name="b"
                                           value={}
                                           onChange={}/><br/>
                                    <input type="text" id="license-number"
                                           className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                                           placeholder="FSSAI License Number (14 Digit)*" name="l"
                                           value={}
                                           onChange={}/><br/>

                                    <h4 className={"font-bold"}>Please place the pin accurately at your outlet’s
                                        location on the map</h4>
                                    <p className={"text-gray-400 text-sm"}>This will help your customers and riders to
                                        locate your store</p><br/>
                                    <div className={"relative"}>
                                        <Map/>
                                    </div>
                                    <br/>
                                </div>
                            ) : (
                                <div className="bg-white mt-4 p-4 border border-gray-300 rounded shadow">
                                    <div className={"flex justify-between"}>
                                        <div>
                                            <h4 className="font-bold text-lg">1. Restaurant Details</h4>
                                            <p className="text-gray-400 text-sm font-light">Name, Address and
                                                Location</p>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => setIsRestaurantAccordionOpen(!isRestaurantAccordionOpen)}
                                            >

                                                {isRestaurantAccordionOpen ?
                                                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                          className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                                                        </svg>
                                                    ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                              viewBox="0 0 24 24" strokeWidth={1.5}
                                                              stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                                    </svg>)}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {isContactAccordionOpen ? (
                                <div className="bg-white mt-4 p-4 border border-gray-300 rounded shadow">
                                    <div className={"flex justify-between"}>
                                        <div>
                                            <h4 className="font-bold text-lg">2. Restaurant Contact Details</h4>
                                            <p className="text-gray-400 text-sm font-light">Phone Number for enquiries
                                                and Manager Information</p>
                                        </div>
                                        <div>
                                            <button type={"button"}
                                                    onClick={() => setIsContactAccordionOpen(!isContactAccordionOpen)}
                                            >
                                                {isContactAccordionOpen ?
                                                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                          className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                                                        </svg>
                                                    ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                              viewBox="0 0 24 24" strokeWidth={1.5}
                                                              stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                                        </svg>
                                                    )}
                                            </button>
                                        </div>
                                    </div>
                                    <br/>
                                    <input
                                        type="text"
                                        maxLength="10"
                                        id="phone"
                                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                                        placeholder="Mobile Number for Enquiries"
                                        name="c"
                                    />
                                    <br/><p className={"font-bold mb-4"}>Manager Information</p>
                                    <input type="text" id="man_name"
                                           className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                                           placeholder="Manager Name" name="d"/>
                                    <br/><input type="email" id="man_email"
                                                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                                                placeholder="Manager Email" name="e"/>
                                    <br/>
                                    <div className=""><input type="text"
                                                             maxLength="10"
                                                             id="phone1"
                                                             className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                                                             placeholder="Manager Mobile Number"
                                                             name="f"/>
                                    </div>
                                    <br/>
                                </div>
                            ) : (
                                <div className="bg-white mt-4 p-4 border border-gray-300 rounded shadow">
                                    <div className={"flex justify-between"}>
                                        <div>
                                            <h4 className="font-bold text-lg">2. Restaurant Contact Details</h4>
                                            <p className="text-gray-400 text-sm font-light">Phone Number for enquiries
                                                and Manager Information</p>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => setIsContactAccordionOpen(!isContactAccordionOpen)}
                                            >

                                                {isContactAccordionOpen ?
                                                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                          className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                                                        </svg>
                                                    ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                              viewBox="0 0 24 24" strokeWidth={1.5}
                                                              stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                                    </svg>)}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {isTypeAccordionOpen ? (
                                <div className="bg-white mt-4 p-4 border border-gray-300 rounded shadow">
                                    <div className={"flex justify-between"}>
                                        <div>
                                            <h4 className="font-bold text-lg">3. Restaurant Type</h4>
                                            <p className="text-gray-400 text-sm font-light">Select a category for your
                                                restaurant</p>
                                        </div>
                                        <div>
                                            <button type={"button"}
                                                    onClick={() => setIsTypeAccordionOpen(!isTypeAccordionOpen)}
                                            >
                                                {isTypeAccordionOpen ?
                                                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                          className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                                                        </svg>
                                                    ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                              viewBox="0 0 24 24" strokeWidth={1.5}
                                                              stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                                        </svg>
                                                    )}
                                            </button>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="flex justify-center">
                                        <div className="mr-6">
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Bakery"/> Bakery<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Bhojanalya"/> Bhojanalya<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Casual Dining"/> Casual Dining<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Confectionery"/> Confectionery<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Fine Dining"/> Fine Dining<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Irani Cafe"/> Irani Cafe<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Mess"/> Mess<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Pub"/> Pub<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Sweet Shop"/> Sweet Shop<br/><br/>
                                        </div>

                                        <div className="mr-6">
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Bar"/> Bar<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Butcher Shop"/> Butcher Shop<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Club"/> Club<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Dessert Parlour"/> Dessert Parlour<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Food Court"/> Food Court<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Kiosk"/> Kiosk<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Microbrewery"/> Microbrewery<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Quick Bites"/> Quick Bites<br/>
                                        </div>

                                        <div className="mr-6">
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Beverage Shop"/> Beverage Shop<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Café"/> Cafe<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Cocktail Bar"/> Cocktail Bar<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Dhaba"/> Dhaba<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Food Truck"/> Food Truck<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Lounge"/> Lounge<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Paan Shop"/> Paan Shop<br/><br/>
                                            <input name="g" type="radio"
                                                   className="w-4 h-4 bg-gray-100 border-gray-300"
                                                   value="Shack"/> Shack<br/>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-white mt-4 p-4 border border-gray-300 rounded shadow">
                                    <div className={"flex justify-between"}>
                                        <div>
                                            <h4 className="font-bold text-lg">3. Restaurant Type</h4>
                                            <p className="text-gray-400 text-sm font-light">Select a category for your
                                                restaurant</p>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => setIsTypeAccordionOpen(!isTypeAccordionOpen)}
                                            >

                                                {isTypeAccordionOpen ?
                                                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                          className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                                                        </svg>
                                                    ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                              viewBox="0 0 24 24" strokeWidth={1.5}
                                                              stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                                    </svg>)}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {isCuisineAccordionOpen ? (
                                <div className="bg-white mt-4 p-4 border border-gray-300 rounded shadow">
                                    <div className={"flex justify-between"}>
                                        <div>
                                            <h4 className="font-bold text-lg">4. Type of cuisines</h4>
                                            <p className="text-gray-400 text-sm font-light">Select options which best
                                                describe food your serve</p>
                                        </div>
                                        <div>
                                            <button type={"button"}
                                                    onClick={() => setIsCuisineAccordionOpen(!isCuisineAccordionOpen)}
                                            >
                                                {isCuisineAccordionOpen ?
                                                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                          className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                                                        </svg>
                                                    ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                              viewBox="0 0 24 24" strokeWidth={1.5}
                                                              stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                                        </svg>
                                                    )}
                                            </button>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="flex justify-center">
                                        <div className="">
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Afghan"/> Afghan<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="African"/> African<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="American"/> American<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Andhra"/> Andhra<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Arabian"/> Arabian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Asian"/> Asian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Asian Fusion"/> Asian Fusion<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Assamese"/> Assamese<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Australian"/> Australian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Awadhi"/> Awadhi<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Bakery"/> Bakery<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Bangladeshi"/> Bangladeshi<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Bar Food"/> Bar Food<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="BBQ"/> BBQ<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Belgian"/> Belgian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Bengali"/> Bengali<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Beverages"/> Beverages<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Bihari"/> Bihari<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Biryani"/> Biryani<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Bohri"/> Bohri<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Brazilian"/> Brazilian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="British"/> British<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Bubble Tea"/> Bubble Tea<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Burger"/> Burger<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Burmese"/> Burmese<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Cafe"/> Cafe<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Cafe Food"/> Cafe Food<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Cake"/> Cake<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Cantonese"/> Cantonese<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Charcoal Chicken"/> Charcoal
                                            Chicken<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Chettinad"/> Chettinad<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Chili"/> Chili<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Chinese"/> Chinese<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Coffee"/> Coffee<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Coffee and Tea"/> Coffee and
                                            Tea<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Continental"/> Continental<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Desserts"/> Desserts<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Drinks Only"/> Drinks Only<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Egyptian"/> Egyptian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Ethiopian"/> Ethiopian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="European"/> European<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Fast Food"/> Fast Food<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Finger Food"/> Finger Food<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="French"/> French<br/><br/>
                                        </div>

                                        <div className="mr-6">
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Fried Chicken"/> Fried Chicken<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Frozen Yogurt"/> Frozen Yogurt<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Fusion"/> Fusion<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Garhwali"/> Garhwali<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="German"/> German<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Goan"/> Goan<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Greek"/> Greek<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Grill"/> Grill<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Gujarati"/> Gujarati<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Healthy Food"/> Healthy Food<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Himachali"/> Himachali<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Hyderabadi"/> Hyderabadi<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Ice Cream"/> Ice Cream<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Indian"/> Indian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Indonesian"/> Indonesian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Iranian"/> Iranian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Irish"/> Irish<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Israeli"/> Israeli<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Italian"/> Italian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Japanese"/> Japanese<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Juices"/> Juices<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Kashmiri"/> Kashmiri<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Kebab"/> Kebab<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Kerala"/> Kerala<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Konkan"/> Konkan<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Korean"/> Korean<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Lebanese"/> Lebanese<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Lucknowi"/> Lucknowi<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Maharashtrian"/> Maharashtrian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Malaysian"/> Malaysian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Malwani"/> Malwani<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Mandi"/> Mandi<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Mangalorean"/> Mangalorean<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Mediterranean"/> Mediterranean<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Mexican"/> Mexican<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Middle Eastern"/> Middle
                                            Eastern<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Mishti"/> Mishti<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Mithai"/> Mithai<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Modern Indian"/> Modern Indian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Momos"/> Momos<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Mongolian"/> Mongolian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Moroccan"/> Moroccan<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Mughlai"/> Mughlai<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Naga"/> Naga<br/><br/>
                                        </div>

                                        <div className="mr-6">
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Nepalese"/> Nepalese<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="North Eastern"/> North Eastern<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="North Indian"/> North Indian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Odia"/> Odia<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Oriental"/> Oriental<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Paan"/> Paan<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Pakistani"/> Pakistani<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Pan Asian"/> Pan Asian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Panini"/> Panini<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Parsi"/> Parsi<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Peruvian"/> Peruvian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Pizza"/> Pizza<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Poké"/> Poké<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Portuguese"/> Portuguese<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Rajasthani"/> Rajasthani<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Raw Meat"/> Raw Meats<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Roast Chicken"/> Roast Chicken<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Rolls"/> Rolls<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Russian"/> Russian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Salad"/> Salad<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Sandwich"/> Sandwich<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Seafood"/> Seafood<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Sindhi"/> Sindhi<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Singaporean"/> Singaporean<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="South American"/> South
                                            American<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="South Indian"/> South Indian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Spanish"/> Spanish<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Sri Lankan"/> Sri Lankan<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Steak"/> Steak<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Street Food"/> Street Food<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Sushi"/> Sushi<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Swedish"/> Swedish<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Tamil"/> Tamil<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Tea"/> Tea<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Tex-Mex"/> Tex-Mex<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Thai"/> Thai<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Tibetan"/> Tibetan<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Turkish"/> Turkish<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Vietnamese"/> Vietnamese<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Wraps"/> Wraps<br/><br/>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-white mt-4 p-4 border border-gray-300 rounded shadow">
                                    <div className={"flex justify-between"}>
                                        <div>
                                            <h4 className="font-bold text-lg">4. Type of cuisines</h4>
                                            <p className="text-gray-400 text-sm font-light">Select
                                                options which best describe food your serve</p>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => setIsCuisineAccordionOpen(!isCuisineAccordionOpen)}
                                            >

                                                {isCuisineAccordionOpen ?
                                                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                          className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                                                        </svg>
                                                    ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                              viewBox="0 0 24 24" strokeWidth={1.5}
                                                              stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                                    </svg>)}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {isHoursAccordionOpen ? (
                                <div className="bg-white mt-4 p-4 border border-gray-300 rounded shadow">
                                    <div className={"flex justify-between"}>
                                        <div>
                                            <h4 className="font-bold text-lg">5. Restaurant
                                                operational hours</h4>
                                            <p className="text-gray-400 text-sm font-light">Mark
                                                restaurant opening and closing hours</p>
                                        </div>
                                        <div>
                                            <button type={"button"}
                                                    onClick={() => setIsHoursAccordionOpen(!isHoursAccordionOpen)}
                                            >
                                                {isHoursAccordionOpen ?
                                                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                          className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                                                        </svg>
                                                    ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                              viewBox="0 0 24 24" strokeWidth={1.5}
                                                              stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                                        </svg>
                                                    )}
                                            </button>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className={"flex justify-between"}>
                                        <div className={"ml-10"}>
                                            <p className={"text-gray-400"}>Opening Time</p>
                                            <select className="form-select form-select-sm"
                                                    aria-label=".form-select-sm example" name="i">
                                                <option value="12:00 AM" selected>12:00 AM</option>
                                                <option value="12:15 AM">12:15 AM</option>
                                                <option value="12:30 AM">12:30 AM</option>
                                                <option value="12:45 AM">12:45 AM</option>
                                                <option value="1:00 AM">1:00 AM</option>
                                                <option value="1:15 AM">1:15 AM</option>
                                                <option value="1:30 AM">1:30 AM</option>
                                                <option value="1:45 AM">1:45 AM</option>
                                                <option value="2:00 AM">2:00 AM</option>
                                                <option value="2:15 AM">2:15 AM</option>
                                                <option value="2:30 AM">2:30 AM</option>
                                                <option value="2:45 AM">2:45 AM</option>
                                                <option value="3:00 AM">3:00 AM</option>
                                                <option value="3:15 AM">3:15 AM</option>
                                                <option value="3:30 AM">3:30 AM</option>
                                                <option value="3:45 AM">3:45 AM</option>
                                                <option value="4:00 AM">4:00 AM</option>
                                                <option value="4:15 AM">4:15 AM</option>
                                                <option value="4:30 AM">4:30 AM</option>
                                                <option value="4:45 AM">4:45 AM</option>
                                                <option value="5:00 AM">5:00 AM</option>
                                                <option value="5:15 AM">5:15 AM</option>
                                                <option value="5:30 AM">5:30 AM</option>
                                                <option value="5:45 AM">5:45 AM</option>
                                                <option value="6:00 AM">6:00 AM</option>
                                                <option value="6:15 AM">6:15 AM</option>
                                                <option value="6:30 AM">6:30 AM</option>
                                                <option value="6:45 AM">6:45 AM</option>
                                                <option value="7:00 AM">7:00 AM</option>
                                                <option value="7:15 AM">7:15 AM</option>
                                                <option value="7:30 AM">7:30 AM</option>
                                                <option value="7:45 AM">7:45 AM</option>
                                                <option value="8:00 AM" selected>8:00 AM</option>
                                                <option value="8:15 AM">8:15 AM</option>
                                                <option value="8:30 AM">8:30 AM</option>
                                                <option value="8:45 AM">8:45 AM</option>
                                                <option value="9:00 AM">9:00 AM</option>
                                                <option value="9:15 AM">9:15 AM</option>
                                                <option value="9:30 AM">9:30 AM</option>
                                                <option value="9:45 AM">9:45 AM</option>
                                                <option value="10:00 AM">10:00 AM</option>
                                                <option value="10:15 AM">10:15 AM</option>
                                                <option value="10:30 AM">10:30 AM</option>
                                                <option value="10:45 AM">10:45 AM</option>
                                                <option value="11:00 AM">11:00 AM</option>
                                                <option value="11:15 AM">11:15 AM</option>
                                                <option value="11:30 AM">11:30 AM</option>
                                                <option value="11:45 AM">11:45 AM</option>
                                                <option value="12:00 AM">12:00 PM</option>
                                                <option value="12:15 PM">12:15 PM</option>
                                                <option value="12:30 PM">12:30 PM</option>
                                                <option value="12:45 PM">12:45 PM</option>
                                                <option value="1:00 PM">1:00 PM</option>
                                                <option value="1:15 PM">1:15 PM</option>
                                                <option value="1:30 PM">1:30 PM</option>
                                                <option value="1:45 PM">1:45 PM</option>
                                                <option value="2:00 PM">2:00 PM</option>
                                                <option value="2:15 PM">2:15 PM</option>
                                                <option value="2:30 PM">2:30 PM</option>
                                                <option value="2:45 PM">2:45 PM</option>
                                                <option value="3:00 PM">3:00 PM</option>
                                                <option value="3:15 PM">3:15 PM</option>
                                                <option value="3:30 PM">3:30 PM</option>
                                                <option value="3:45 PM">3:45 PM</option>
                                                <option value="4:00 PM">4:00 PM</option>
                                                <option value="4:15 PM">4:15 PM</option>
                                                <option value="4:30 PM">4:30 PM</option>
                                                <option value="4:45 PM">4:45 PM</option>
                                                <option value="5:00 PM">5:00 PM</option>
                                                <option value="5:15 PM">5:15 PM</option>
                                                <option value="5:30 PM">5:30 PM</option>
                                                <option value="5:45 PM">5:45 PM</option>
                                                <option value="6:00 PM">6:00 PM</option>
                                                <option value="6:15 PM">6:15 PM</option>
                                                <option value="6:30 PM">6:30 PM</option>
                                                <option value="6:45 PM">6:45 PM</option>
                                                <option value="7:00 PM">7:00 PM</option>
                                                <option value="7:15 PM">7:15 PM</option>
                                                <option value="7:30 PM">7:30 PM</option>
                                                <option value="7:45 PM">7:45 PM</option>
                                                <option value="8:00 PM">8:00 PM</option>
                                                <option value="8:15 PM">8:15 PM</option>
                                                <option value="8:30 PM">8:30 PM</option>
                                                <option value="8:45 PM">8:45 PM</option>
                                                <option value="9:00 PM">9:00 PM</option>
                                                <option value="9:15 PM">9:15 PM</option>
                                                <option value="9:30 PM">9:30 PM</option>
                                                <option value="9:45 PM">9:45 PM</option>
                                                <option value="10:00 PM">10:00 PM</option>
                                                <option value="10:15 PM">10:15 PM</option>
                                                <option value="10:30 PM">10:30 PM</option>
                                                <option value="10:45 PM">10:45 PM</option>
                                                <option value="11:00 PM">11:00 PM</option>
                                                <option value="11:15 PM">11:15 PM</option>
                                                <option value="11:30 PM">11:30 PM</option>
                                                <option value="11:45 PM">11:45 PM</option>
                                            </select>

                                            <br/>
                                        </div>
                                        <div className={"mr-10"}>
                                            <p className={"text-gray-400"}>Closing Time</p>
                                            <select className="form-select form-select-sm"
                                                    aria-label=".form-select-sm example" name="j">
                                                <option value="12:00 AM">12:00 AM</option>
                                                <option value="12:15 AM">12:15 AM</option>
                                                <option value="12:30 AM">12:30 AM</option>
                                                <option value="12:45 AM">12:45 AM</option>
                                                <option value="1:00 AM">1:00 AM</option>
                                                <option value="1:15 AM">1:15 AM</option>
                                                <option value="1:30 AM">1:30 AM</option>
                                                <option value="1:45 AM">1:45 AM</option>
                                                <option value="2:00 AM">2:00 AM</option>
                                                <option value="2:15 AM">2:15 AM</option>
                                                <option value="2:30 AM">2:30 AM</option>
                                                <option value="2:45 AM">2:45 AM</option>
                                                <option value="3:00 AM">3:00 AM</option>
                                                <option value="3:15 AM">3:15 AM</option>
                                                <option value="3:30 AM">3:30 AM</option>
                                                <option value="3:45 AM">3:45 AM</option>
                                                <option value="4:00 AM">4:00 AM</option>
                                                <option value="4:15 AM">4:15 AM</option>
                                                <option value="4:30 AM">4:30 AM</option>
                                                <option value="4:45 AM">4:45 AM</option>
                                                <option value="5:00 AM">5:00 AM</option>
                                                <option value="5:15 AM">5:15 AM</option>
                                                <option value="5:30 AM">5:30 AM</option>
                                                <option value="5:45 AM">5:45 AM</option>
                                                <option value="6:00 AM">6:00 AM</option>
                                                <option value="6:15 AM">6:15 AM</option>
                                                <option value="6:30 AM">6:30 AM</option>
                                                <option value="6:45 AM">6:45 AM</option>
                                                <option value="7:00 AM">7:00 AM</option>
                                                <option value="7:15 AM">7:15 AM</option>
                                                <option value="7:30 AM">7:30 AM</option>
                                                <option value="7:45 AM">7:45 AM</option>
                                                <option value="8:00 AM">8:00 AM</option>
                                                <option value="8:15 AM">8:15 AM</option>
                                                <option value="8:30 AM">8:30 AM</option>
                                                <option value="8:45 AM">8:45 AM</option>
                                                <option value="9:00 AM">9:00 AM</option>
                                                <option value="9:15 AM">9:15 AM</option>
                                                <option value="9:30 AM">9:30 AM</option>
                                                <option value="9:45 AM">9:45 AM</option>
                                                <option value="10:00 AM">10:00 AM</option>
                                                <option value="10:15 AM">10:15 AM</option>
                                                <option value="10:30 AM">10:30 AM</option>
                                                <option value="10:45 AM">10:45 AM</option>
                                                <option value="11:00 AM">11:00 AM</option>
                                                <option value="11:15 AM">11:15 AM</option>
                                                <option value="11:30 AM">11:30 AM</option>
                                                <option value="11:45 AM">11:45 AM</option>
                                                <option value="12:00 AM">12:00 PM</option>
                                                <option value="12:15 PM">12:15 PM</option>
                                                <option value="12:30 PM">12:30 PM</option>
                                                <option value="12:45 PM">12:45 PM</option>
                                                <option value="1:00 PM">1:00 PM</option>
                                                <option value="1:15 PM">1:15 PM</option>
                                                <option value="1:30 PM">1:30 PM</option>
                                                <option value="1:45 PM">1:45 PM</option>
                                                <option value="2:00 PM">2:00 PM</option>
                                                <option value="2:15 PM">2:15 PM</option>
                                                <option value="2:30 PM">2:30 PM</option>
                                                <option value="2:45 PM">2:45 PM</option>
                                                <option value="3:00 PM">3:00 PM</option>
                                                <option value="3:15 PM">3:15 PM</option>
                                                <option value="3:30 PM">3:30 PM</option>
                                                <option value="3:45 PM">3:45 PM</option>
                                                <option value="4:00 PM">4:00 PM</option>
                                                <option value="4:15 PM">4:15 PM</option>
                                                <option value="4:30 PM">4:30 PM</option>
                                                <option value="4:45 PM">4:45 PM</option>
                                                <option value="5:00 PM">5:00 PM</option>
                                                <option value="5:15 PM">5:15 PM</option>
                                                <option value="5:30 PM">5:30 PM</option>
                                                <option value="5:45 PM">5:45 PM</option>
                                                <option value="6:00 PM" selected>6:00 PM</option>
                                                <option value="6:15 PM">6:15 PM</option>
                                                <option value="6:30 PM">6:30 PM</option>
                                                <option value="6:45 PM">6:45 PM</option>
                                                <option value="7:00 PM">7:00 PM</option>
                                                <option value="7:15 PM">7:15 PM</option>
                                                <option value="7:30 PM">7:30 PM</option>
                                                <option value="7:45 PM">7:45 PM</option>
                                                <option value="8:00 PM">8:00 PM</option>
                                                <option value="8:15 PM">8:15 PM</option>
                                                <option value="8:30 PM">8:30 PM</option>
                                                <option value="8:45 PM">8:45 PM</option>
                                                <option value="9:00 PM">9:00 PM</option>
                                                <option value="9:15 PM">9:15 PM</option>
                                                <option value="9:30 PM">9:30 PM</option>
                                                <option value="9:45 PM">9:45 PM</option>
                                                <option value="10:00 PM">10:00 PM</option>
                                                <option value="10:15 PM">10:15 PM</option>
                                                <option value="10:30 PM">10:30 PM</option>
                                                <option value="10:45 PM">10:45 PM</option>
                                                <option value="11:00 PM">11:00 PM</option>
                                                <option value="11:15 PM">11:15 PM</option>
                                                <option value="11:30 PM">11:30 PM</option>
                                                <option value="11:45 PM">11:45 PM</option>
                                            </select>
                                            <br/><br />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-white mt-4 p-4 border border-gray-300 rounded shadow">
                                    <div className={"flex justify-between"}>
                                        <div>
                                            <h4 className="font-bold text-lg">5. Restaurant
                                                operational hours</h4>
                                            <p className="text-gray-400 text-sm font-light">Mark
                                                restaurant opening and closing hours</p>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => setIsHoursAccordionOpen(!isHoursAccordionOpen)}
                                            >

                                                {isHoursAccordionOpen ?
                                                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                          className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                                                        </svg>
                                                    ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                              viewBox="0 0 24 24" strokeWidth={1.5}
                                                              stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                                    </svg>)}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {isImagesAccordionOpen ? (
                                <div className="bg-white mt-4 p-4 border border-gray-300 rounded shadow">
                                    <div className={"flex justify-between"}>
                                        <div>
                                            <h4 className="font-bold text-lg">6. Restaurant
                                                Images</h4>
                                            <p className="text-gray-400 text-sm font-light">Upload
                                                various pictures of your outlet</p>
                                        </div>
                                        <div>
                                            <button type={"button"}
                                                    onClick={() => setIsImagesAccordionOpen(!isImagesAccordionOpen)}
                                            >
                                                {isImagesAccordionOpen ?
                                                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                          className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                                                        </svg>
                                                    ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                              viewBox="0 0 24 24" strokeWidth={1.5}
                                                              stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                                                        </svg>
                                                    )}
                                            </button>
                                        </div>
                                    </div>
                                    <br/>

                                    <div className="flex items-center justify-center w-full">
                                        <label htmlFor="dropzone-file"
                                               className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-4 text-gray-500"
                                                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                     viewBox="0 0 20 16">
                                                    <path stroke="currentColor" strokeLinecap="round"
                                                          strokeLinejoin="round" strokeWidth="2"
                                                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500"><span
                                                    className="font-semibold">Click to upload</span> or drag and drop
                                                </p>
                                                <p className="text-xs text-gray-500">PNG or JPG</p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" accept="image/png, image/jpeg" name="k"/>
                                        </label>
                                    </div>
                                    <br/>
                                </div>
                            ) : (
                                <div className="bg-white mt-4 p-4 border border-gray-300 rounded shadow">
                                    <div className={"flex justify-between"}>
                                        <div>
                                            <h4 className="font-bold text-lg">6. Restaurant
                                                Images</h4>
                                            <p className="text-gray-400 text-sm font-light">Upload
                                                various pictures of your outlet</p>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => setIsImagesAccordionOpen(!isImagesAccordionOpen)}
                                            >

                                                {isImagesAccordionOpen ?
                                                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                          className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                                                        </svg>
                                                    ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                              viewBox="0 0 24 24" strokeWidth={1.5}
                                                              stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                                    </svg>)}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <br/><br/>
                </form>
            </div>
        </div>
    )
}

export default AddRestaurant