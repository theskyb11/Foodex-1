import TopLoadingBar from "../components/TopLoadingBar";
import Navbar from "../layouts/Navbar";
import CheckLogin from "../components/CheckLogin";
import {useState} from "react";
import Map from "../features/addRestaurant/Map";
import axios from "axios";
import Button from "../components/button";
import {toast} from "react-toastify";

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
    const [rating, setRating] = useState(0.0);
    const [file, setFile] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const handleCuisineChange = (e) => {
        const value = e.target.value;
        if (cuisine.includes(value)) {
            setCuisine(cuisine.filter(selectedCuisine => selectedCuisine !== value));
        } else {
            setCuisine([...cuisine, value]);
        }
    };

    const handleOpeningTimeChange = (e) => {
        setOpeningTime(e.target.value);
    };

    const handleClosingTimeChange = (e) => {
        setClosingTime(e.target.value);
    };

    const submitRestaurant = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const formData = new FormData();
        formData.append('res_id', resId);
        formData.append('address', resAddress);
        formData.append('closing_time', closingTime);
        formData.append('cuisine', cuisine.join(',')); // Join cuisine array to a comma-separated string
        formData.append('email', manEmail);
        formData.append('manager', manName);
        formData.append('opening_time', openingTime);
        formData.append('phone', mobNo);
        formData.append('rating', rating);
        formData.append('res_name', resName);
        formData.append('res_phone', manNo);

        formData.append('type', type);

        // formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:8085/restaurant', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Restaurant added successfully!');

            setResName('');
            setResAddress('');
            setResId('');
            setMobNo('');
            setManName('');
            setManEmail('');
            setManNo('');
            setType('');
            setCuisine([]);
            setOpeningTime('');
            setClosingTime('');
            setFile(null);

            toast.success('Submitted successfully');
        } catch (error) {
            toast.error("Couldn't submit your data!")
            console.error('Error adding restaurant:', error);
        }

        setIsLoading(false);
    };

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
                                        value={resName}
                                        onChange={(e) => setResName(e.target.value)}
                                    /><br/>
                                    <input type="text" id="address"
                                           className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                                           placeholder="Restaurant Address" name="b"
                                           value={resAddress}
                                           onChange={(e) => setResAddress(e.target.value)}/><br/>
                                    <input type="text" id="license-number"
                                           className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                                           placeholder="FSSAI License Number (14 Digit)*" name="l"
                                           value={resId}
                                           onChange={(e) => setResId(e.target.value)}/><br/>

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
                                        value={mobNo}
                                        onChange={(e) => setMobNo(e.target.value)}
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
                                                   value="Afghan"
                                                   checked={cuisine.includes('Afghan')}
                                                   onChange={handleCuisineChange}/> Afghan<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="African"
                                                   checked={cuisine.includes('African')}
                                                   onChange={handleCuisineChange}/> African<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="American"
                                                   checked={cuisine.includes('American')}
                                                   onChange={handleCuisineChange}/> American<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Andhra"
                                                   checked={cuisine.includes('Andhra')}
                                                   onChange={handleCuisineChange}/> Andhra<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Arabian"
                                                   checked={cuisine.includes('Arabian')}
                                                   onChange={handleCuisineChange}/> Arabian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Asian"
                                                   checked={cuisine.includes('Asian')}
                                                   onChange={handleCuisineChange}/> Asian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Asian Fusion"
                                                   checked={cuisine.includes('Asian Fusion')}
                                                   onChange={handleCuisineChange}/> Asian Fusion<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Assamese"
                                                   checked={cuisine.includes('Assamese')}
                                                   onChange={handleCuisineChange}/> Assamese<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Australian"
                                                   checked={cuisine.includes('Australian')}
                                                   onChange={handleCuisineChange}/> Australian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Awadhi"
                                                   checked={cuisine.includes('Awadhi')}
                                                   onChange={handleCuisineChange}/> Awadhi<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Bakery"
                                                   checked={cuisine.includes('Bakery')}
                                                   onChange={handleCuisineChange}/> Bakery<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Bangladeshi"
                                                   checked={cuisine.includes('Bangladeshi')}
                                                   onChange={handleCuisineChange}/> Bangladeshi<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Bar Food"
                                                   checked={cuisine.includes('Bar Food')}
                                                   onChange={handleCuisineChange}/> Bar Food<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="BBQ"
                                                   checked={cuisine.includes('BBQ')}
                                                   onChange={handleCuisineChange}/> BBQ<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Belgian"
                                                   checked={cuisine.includes('Belgian')}
                                                   onChange={handleCuisineChange}/> Belgian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Bengali"
                                                   checked={cuisine.includes('Bengali')}
                                                   onChange={handleCuisineChange}/> Bengali<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Beverages"
                                                   checked={cuisine.includes('Beverages')}
                                                   onChange={handleCuisineChange}/> Beverages<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Bihari"
                                                   checked={cuisine.includes('Bihari')}
                                                   onChange={handleCuisineChange}/> Bihari<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Biryani"
                                                   checked={cuisine.includes('Biryani')}
                                                   onChange={handleCuisineChange}/> Biryani<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Bohri"
                                                   checked={cuisine.includes('Bohri')}
                                                   onChange={handleCuisineChange}/> Bohri<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Brazilian"
                                                   checked={cuisine.includes('Brazilian')}
                                                   onChange={handleCuisineChange}/> Brazilian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="British"
                                                   checked={cuisine.includes('British')}
                                                   onChange={handleCuisineChange}/> British<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Bubble Tea"
                                                   checked={cuisine.includes('Bubble Tea')}
                                                   onChange={handleCuisineChange}/> Bubble Tea<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Burger"
                                                   checked={cuisine.includes('Burger')}
                                                   onChange={handleCuisineChange}/> Burger<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Burmese"
                                                   checked={cuisine.includes('Burmese')}
                                                   onChange={handleCuisineChange}/> Burmese<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Cafe"
                                                   checked={cuisine.includes('Cafe')}
                                                   onChange={handleCuisineChange}/> Cafe<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Cafe Food"
                                                   checked={cuisine.includes('Cafe Food')}
                                                   onChange={handleCuisineChange}/> Cafe Food<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Cake"
                                                   checked={cuisine.includes('Cake')}
                                                   onChange={handleCuisineChange}/> Cake<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Cantonese"
                                                   checked={cuisine.includes('Cantonese')}
                                                   onChange={handleCuisineChange}/> Cantonese<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Charcoal Chicken"
                                                   checked={cuisine.includes('Charcoal Chicken')}
                                                   onChange={handleCuisineChange}/> Charcoal
                                            Chicken<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Chettinad"
                                                   checked={cuisine.includes('Chettinad')}
                                                   onChange={handleCuisineChange}/> Chettinad<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Chili"
                                                   checked={cuisine.includes('Chili')}
                                                   onChange={handleCuisineChange}/> Chili<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Chinese"
                                                   checked={cuisine.includes('Chinese')}
                                                   onChange={handleCuisineChange}/> Chinese<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Coffee"
                                                   checked={cuisine.includes('Coffee')}
                                                   onChange={handleCuisineChange}/> Coffee<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Coffee and Tea"
                                                   checked={cuisine.includes('Coffee and Tea')}
                                                   onChange={handleCuisineChange}/> Coffee and
                                            Tea<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Continental"
                                                   checked={cuisine.includes('Continental')}
                                                   onChange={handleCuisineChange}/> Continental<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Desserts"
                                                   checked={cuisine.includes('Desserts')}
                                                   onChange={handleCuisineChange}/> Desserts<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Drinks Only"
                                                   checked={cuisine.includes('Drinks Only')}
                                                   onChange={handleCuisineChange}/> Drinks Only<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Egyptian"
                                                   checked={cuisine.includes('Egyptian')}
                                                   onChange={handleCuisineChange}/> Egyptian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Ethiopian"
                                                   checked={cuisine.includes('Ethiopian')}
                                                   onChange={handleCuisineChange}/> Ethiopian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="European"
                                                   checked={cuisine.includes('European')}
                                                   onChange={handleCuisineChange}/> European<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Fast Food"
                                                   checked={cuisine.includes('Fast Food')}
                                                   onChange={handleCuisineChange}/> Fast Food<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Finger Food"
                                                   checked={cuisine.includes('Finger Food')}
                                                   onChange={handleCuisineChange}/> Finger Food<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="French"
                                                   checked={cuisine.includes('French')}
                                                   onChange={handleCuisineChange}/> French<br/><br/>
                                        </div>

                                        <div className="mr-6">
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Fried Chicken" checked={cuisine.includes('Fried Chicken')}
                                                   onChange={handleCuisineChange} /> Fried Chicken<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Frozen Yogurt" checked={cuisine.includes('Frozen Yogurt')}
                                                   onChange={handleCuisineChange} /> Frozen Yogurt<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Fusion" checked={cuisine.includes('Fusion')}
                                                   onChange={handleCuisineChange} /> Fusion<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Garhwali" checked={cuisine.includes('Garhwali')}
                                                   onChange={handleCuisineChange} /> Garhwali<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="German" checked={cuisine.includes('German')}
                                                   onChange={handleCuisineChange} /> German<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Goan" checked={cuisine.includes('Goan')}
                                                   onChange={handleCuisineChange} /> Goan<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Greek" checked={cuisine.includes('Greek')}
                                                   onChange={handleCuisineChange} /> Greek<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Grill" checked={cuisine.includes('Grill')}
                                                   onChange={handleCuisineChange} /> Grill<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Gujarati" checked={cuisine.includes('Gujarati')}
                                                   onChange={handleCuisineChange} /> Gujarati<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Healthy Food" checked={cuisine.includes('Healthy Food')}
                                                   onChange={handleCuisineChange} /> Healthy Food<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Himachali" checked={cuisine.includes('Himachali')}
                                                   onChange={handleCuisineChange} /> Himachali<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Hyderabadi" checked={cuisine.includes('Hyderabadi')}
                                                   onChange={handleCuisineChange} /> Hyderabadi<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Ice Cream" checked={cuisine.includes('Ice Cream')}
                                                   onChange={handleCuisineChange} /> Ice Cream<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Indian" checked={cuisine.includes('Indian')}
                                                   onChange={handleCuisineChange} /> Indian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Indonesian" checked={cuisine.includes('Indonesian')}
                                                   onChange={handleCuisineChange} /> Indonesian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Iranian" checked={cuisine.includes('Iranian')}
                                                   onChange={handleCuisineChange} /> Iranian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Irish" checked={cuisine.includes('Irish')}
                                                   onChange={handleCuisineChange} /> Irish<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Israeli" checked={cuisine.includes('Israeli')}
                                                   onChange={handleCuisineChange} /> Israeli<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Italian" checked={cuisine.includes('Italian')}
                                                   onChange={handleCuisineChange} /> Italian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Japanese" checked={cuisine.includes('Japanese')}
                                                   onChange={handleCuisineChange} /> Japanese<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Juices" checked={cuisine.includes('Juices')}
                                                   onChange={handleCuisineChange} /> Juices<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Kashmiri" checked={cuisine.includes('Kashmiri')}
                                                   onChange={handleCuisineChange} /> Kashmiri<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Kebab" checked={cuisine.includes('Kebab')}
                                                   onChange={handleCuisineChange} /> Kebab<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Kerala" checked={cuisine.includes('Kerala')}
                                                   onChange={handleCuisineChange} /> Kerala<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Konkan" checked={cuisine.includes('Konkan')}
                                                   onChange={handleCuisineChange} /> Konkan<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Korean" checked={cuisine.includes('Korean')}
                                                   onChange={handleCuisineChange} /> Korean<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Lebanese" checked={cuisine.includes('Lebanese')}
                                                   onChange={handleCuisineChange} /> Lebanese<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Lucknowi" checked={cuisine.includes('Lucknowi')}
                                                   onChange={handleCuisineChange} /> Lucknowi<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Maharashtrian" checked={cuisine.includes('Maharashtrian')}
                                                   onChange={handleCuisineChange} /> Maharashtrian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Malaysian" checked={cuisine.includes('Malaysian')}
                                                   onChange={handleCuisineChange} /> Malaysian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Malwani" checked={cuisine.includes('Malwani')}
                                                   onChange={handleCuisineChange} /> Malwani<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Mandi" checked={cuisine.includes('Mandi')}
                                                   onChange={handleCuisineChange} /> Mandi<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Mangalorean" checked={cuisine.includes('Mangalorean')}
                                                   onChange={handleCuisineChange} /> Mangalorean<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Mediterranean" checked={cuisine.includes('Mediterranean')}
                                                   onChange={handleCuisineChange} /> Mediterranean<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Mexican" checked={cuisine.includes('Mexican')}
                                                   onChange={handleCuisineChange} /> Mexican<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Middle Eastern" checked={cuisine.includes('Middle Eastern')}
                                                   onChange={handleCuisineChange} /> Middle
                                            Eastern<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Mishti" checked={cuisine.includes('Mishti')}
                                                   onChange={handleCuisineChange} /> Mishti<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Mithai" checked={cuisine.includes('Mithai')}
                                                   onChange={handleCuisineChange} /> Mithai<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Modern Indian" checked={cuisine.includes('Modern Indian')}
                                                   onChange={handleCuisineChange} /> Modern Indian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Momos" checked={cuisine.includes('Momos')}
                                                   onChange={handleCuisineChange} /> Momos<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Mongolian" checked={cuisine.includes('Mongolian')}
                                                   onChange={handleCuisineChange} /> Mongolian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Moroccan" checked={cuisine.includes('Moroccan')}
                                                   onChange={handleCuisineChange} /> Moroccan<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Mughlai" checked={cuisine.includes('Mughlai')}
                                                   onChange={handleCuisineChange} /> Mughlai<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Naga" checked={cuisine.includes('Naga')}
                                                   onChange={handleCuisineChange} /> Naga<br/><br/>
                                        </div>

                                        <div className="mr-6">
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Nepalese" checked={cuisine.includes('Nepalese')}
                                                   onChange={handleCuisineChange} /> Nepalese<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="North Eastern" checked={cuisine.includes('North Eastern')}
                                                   onChange={handleCuisineChange} /> North Eastern<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="North Indian" checked={cuisine.includes('North Indian')}
                                                   onChange={handleCuisineChange} /> North Indian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Odia" checked={cuisine.includes('Odia')}
                                                   onChange={handleCuisineChange} /> Odia<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Oriental" checked={cuisine.includes('Oriental')}
                                                   onChange={handleCuisineChange} /> Oriental<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Paan" checked={cuisine.includes('Paan')}
                                                   onChange={handleCuisineChange} /> Paan<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Pakistani" checked={cuisine.includes('Pakistani')}
                                                   onChange={handleCuisineChange} /> Pakistani<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Pan Asian" checked={cuisine.includes('Pan Asian')}
                                                   onChange={handleCuisineChange} /> Pan Asian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Panini" checked={cuisine.includes('Panini')}
                                                   onChange={handleCuisineChange} /> Panini<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Parsi" checked={cuisine.includes('Parsi')}
                                                   onChange={handleCuisineChange} /> Parsi<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Peruvian" checked={cuisine.includes('Peruvian')}
                                                   onChange={handleCuisineChange} /> Peruvian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Pizza" checked={cuisine.includes('Pizza')}
                                                   onChange={handleCuisineChange} /> Pizza<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Poké" checked={cuisine.includes('Poké')}
                                                   onChange={handleCuisineChange} /> Poké<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Portuguese" checked={cuisine.includes('Portuguese')}
                                                   onChange={handleCuisineChange} /> Portuguese<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Rajasthani" checked={cuisine.includes('Rajasthani')}
                                                   onChange={handleCuisineChange} /> Rajasthani<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Raw Meat" checked={cuisine.includes('Raw Meat')}
                                                   onChange={handleCuisineChange} /> Raw Meats<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Roast Chicken" checked={cuisine.includes('Roast Chicken')}
                                                   onChange={handleCuisineChange} /> Roast Chicken<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Rolls" checked={cuisine.includes('Rolls')}
                                                   onChange={handleCuisineChange} /> Rolls<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Russian" checked={cuisine.includes('Russian')}
                                                   onChange={handleCuisineChange} /> Russian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Salad" checked={cuisine.includes('Salad')}
                                                   onChange={handleCuisineChange} /> Salad<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Sandwich" checked={cuisine.includes('Sandwich')}
                                                   onChange={handleCuisineChange} /> Sandwich<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Seafood" checked={cuisine.includes('Seafood')}
                                                   onChange={handleCuisineChange} /> Seafood<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Sindhi" checked={cuisine.includes('Sindhi')}
                                                   onChange={handleCuisineChange} /> Sindhi<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Singaporean" checked={cuisine.includes('Singaporean')}
                                                   onChange={handleCuisineChange} /> Singaporean<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="South American" checked={cuisine.includes('South American')}
                                                   onChange={handleCuisineChange} /> South
                                            American<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="South Indian" checked={cuisine.includes('South Indian')}
                                                   onChange={handleCuisineChange} /> South Indian<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Spanish" checked={cuisine.includes('Spanish')}
                                                   onChange={handleCuisineChange} /> Spanish<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Sri Lankan" checked={cuisine.includes('Sri Lankan')}
                                                   onChange={handleCuisineChange} /> Sri Lankan<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Steak" checked={cuisine.includes('Steak')}
                                                   onChange={handleCuisineChange} /> Steak<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Street Food" checked={cuisine.includes('Street Food')}
                                                   onChange={handleCuisineChange} /> Street Food<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Sushi" checked={cuisine.includes('Sushi')}
                                                   onChange={handleCuisineChange} /> Sushi<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Swedish" checked={cuisine.includes('Swedish')}
                                                   onChange={handleCuisineChange} /> Swedish<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Tamil" checked={cuisine.includes('Tamil')}
                                                   onChange={handleCuisineChange} /> Tamil<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Tea" checked={cuisine.includes('Tea')}
                                                   onChange={handleCuisineChange} /> Tea<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Tex-Mex" checked={cuisine.includes('Tex-Mex')}
                                                   onChange={handleCuisineChange} /> Tex-Mex<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Thai" checked={cuisine.includes('Thai')}
                                                   onChange={handleCuisineChange} /> Thai<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Tibetan" checked={cuisine.includes('Tibetan')}
                                                   onChange={handleCuisineChange} /> Tibetan<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Turkish" checked={cuisine.includes('Turkish')}
                                                   onChange={handleCuisineChange} /> Turkish<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Vietnamese" checked={cuisine.includes('Vietnamese')}
                                                   onChange={handleCuisineChange} /> Vietnamese<br/><br/>
                                            <input name="h" type="checkbox"
                                                   className="form-check-input"
                                                   value="Wraps" checked={cuisine.includes('Wraps')}
                                                   onChange={handleCuisineChange} /> Wraps<br/><br/>
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
                                                    aria-label=".form-select-sm example" name="i"
                                                    value={openingTime}
                                                    onChange={handleOpeningTimeChange}>
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
                                                    aria-label=".form-select-sm example" name="j"
                                                    value={closingTime}
                                                    onChange={handleClosingTimeChange}>
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
                                            <input id="dropzone-file" type="file" className="hidden" accept="image/png, image/jpeg" name="k"
                                            onChange={(e) => setFile(e.target.files[0])}/>
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
                        <div className="mb-4">
                            <Button isLoading={isLoading} onClick={submitRestaurant} text="Submit" />
                        </div>
                    </div>
                    <br/><br/>
                </form>
            </div>
        </div>
    )
}

export default AddRestaurant