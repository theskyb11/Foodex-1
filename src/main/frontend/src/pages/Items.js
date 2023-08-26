import React, {useEffect, useState} from 'react';
import Footer from '../layouts/Footer';
import {carousel1, carousel2, carousel3, carousel4, carousel5, pot} from '../assets/img';
import LoadingBar from 'react-top-loading-bar';
import Navbar from '../layouts/Navbar';
import {MdChevronLeft, MdChevronRight, MdFastfood, MdBakeryDining} from 'react-icons/md';
import {FiGlobe} from "react-icons/fi";
import {BiDrink, BiSolidFoodMenu} from "react-icons/bi";
import {PiBowlFoodBold} from "react-icons/pi";
import {GiChickenOven, GiIndianPalace} from "react-icons/gi";
import {getItems, getItemsImage} from "../features/items/ItemsSort";
import {FaStar} from "react-icons/fa";
import axios from "axios";
import {GrLocationPin} from "react-icons/gr";
import {checkUsernameAvailability, GetUser} from "../services/getUser";
import {LuShoppingCart} from "react-icons/lu";
import {
    addNewToCart,
    checkCart,
    updateToCart,
    removeFromCart
} from "../features/items/cartInput";
import {username} from "../data/constants";
import * as userData from "../data/constants";
// import {useCartStatus} from "../features/items/useCartStatus";

const Items = () => {

    const [selectedType, setSelectedType] = useState("All");
    const [items, setItems] = useState([]);
    const [showAllItems, setShowAllItems] = useState(false);
    const [user, setUser] = useState(null);
    const [item_id, setItemid] = useState(0);
    const [res_id, setResid] = useState(0);
    const [quantity, setQuant] = useState(null);

    const [username, setUsername] = useState('');

    useEffect(() => {
        GetUser().then((userData) => {
            if (userData) {
                setUser(userData);
                setUsername(userData.username);
                console.log("Got User");
            }
        })
    }, [])

    console.log("Username is:", userData.username);

    useEffect(() => {
        fetchItems(selectedType);
    }, [selectedType]);

    const fetchItems = async (type) => {
        try {
            const itemsData = await getItems(type);
            console.log(itemsData); // Log the fetched data
            setItems(itemsData);

            // itemsData.forEach((item) => {
            //     checkItemExistence(item.itemid);
            // });

        } catch (error) {
            console.log("Error fetching items:", error);
        }
    };

    const addnewcart = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newItemId = parseInt(formData.get('item_id'), 10);
        const newResId = parseInt(formData.get('res_id'), 10);
        const newUsername = formData.get('username');
        const newQuantity = formData.get('quantity');

        console.log("Username:", newUsername, "quantity:", newQuantity, "Item ID:", newItemId, "Res ID:", newResId);

        try {
            await addNewToCart({
                item_id: newItemId,
                res_id: newResId,
                quantity: newQuantity,
                username: newUsername,
            });

            // Clear form fields
            setItemid('');
            setResid('');
            setQuant('');
            setUsername('');
        } catch (error) {
            // Handle error if needed
        }
    };

    const updateToCartQuantity = async (e) => {
        e.preventDefault();
        try {
            await updateToCart({
                item_id,
                res_id,
                quantity,
                username, // Use user.username here
            });
            // Clear form fields
            setItemid('');
            setResid('');
            setQuant('');
            setUsername('');
        } catch (error) {
            // Handle error if needed
        }
    };
    const handleTypeChange = (type) => {
        setSelectedType(type);
    };

    const slides = [
        {
            url: carousel1,
        },
        {
            url: carousel2,
        },
        {
            url: carousel3,
        },
        {
            url: carousel4,
        },
        {
            url: carousel5,
        },
    ];

    const [progress, setProgress] = useState(0);

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft -= 260;

        // If the slider reaches the beginning, jump to the last slide to create a loop effect
        if (slider.scrollLeft <= 0) {
            slider.scrollLeft = slider.scrollWidth;
        }
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft += 260;

        // If the slider reaches the end, jump to the first slide to create a loop effect
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
            slider.scrollLeft = 0;
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            slideRight();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const displayedItems = showAllItems ? items : items.slice(0, 4);

    if (!items) {
        return <div>Loading...</div>;
    }

    // let response;
    //
    // const Cartcheck = async (username, itemid) => {
    //     try {
    //         response = await checkCart(username, itemid);
    //         if (response === true) {
    //             console.log('Item is in the cart.');
    //             return true;
    //         } else if (response === false) {
    //             console.log('Item is not in the cart.');
    //             return false;
    //         } else {
    //             console.log('Error while checking cart.');
    //             return true; // Set a default value if there's an error
    //         }
    //     } catch (error) {
    //         console.error('Error while fetching cart items:', error);
    //         return false; // Set a default value in case of an error
    //     }
    // }

    return (
        <div className={'h-screen scroll-smooth'}>
            <LoadingBar color='#1e53ff' progress={progress} loaderSpeed={250}/>
            <Navbar/>

            <div className='relative mt-[98px] flex gap-10 items-center bg-indigo-950'>
                <MdChevronLeft
                    className='opacity-50 cursor-pointer hover:opacity-100 bg-stone-300 rounded-2xl '
                    onClick={slideLeft}
                    size={40}
                />
                <div id='slider'
                     className='w-screen h-[250px] overflow-hidden bg-indigo-950 whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {/* Duplicate the slides to create a loop */}
                    {slides.map((item, index) => (
                        <img
                            key={index}
                            className='w-[250px] inline-block mx-4 my-auto p-2 cursor-pointer rounded-2xl hover:scale-105 ease-in-out duration-300'
                            src={item.url}
                            alt='/'
                        />
                    ))}
                    {slides.map((item, index) => (
                        <img
                            key={index + slides.length}
                            className='w-[250px] inline-block mx-4 my-auto p-2 cursor-pointer rounded-2xl hover:scale-105 ease-in-out duration-300'
                            src={item.url}
                            alt='/'
                        />
                    ))}
                </div>
                <MdChevronRight
                    className='opacity-50 cursor-pointer hover:opacity-100 bg-stone-300 rounded-2xl '
                    onClick={slideRight}
                    size={40}
                />
            </div>

            <br/>

            <h1><span className={'font-black relative ml-10 text-xl'}>Menu </span><span
                className={'relative text-xl'}>Category</span></h1>

            <div className="relative text-center gap-4 justify-center my-4">
                <div className="flex flex-col-4 gap-5 ml-10 mt-10 items-center">
                    <button onClick={() => handleTypeChange('All')}
                            className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[110px] h-[80px] text-center group md:x hover:bg-violet-800 active:bg-violet-800">
                        <div
                            className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">
                            <BiSolidFoodMenu className="text-4xl text-stone-900"/>
                        </div>
                        <span className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">All Delicacy</span>
                    </button>

                    <button onClick={() => handleTypeChange('international')}
                            className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[110px] h-[80px] text-center group md:x hover:bg-violet-800 active:bg-violet-800">
                        <div
                            className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">
                            <FiGlobe className="text-4xl text-stone-900"/>
                        </div>
                        <span
                            className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">International</span>
                    </button>

                    <button onClick={() => handleTypeChange('desi')}
                            className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[100px] h-[80px] text-center group md:x hover:bg-violet-800 active:bg-violet-800">
                        <div
                            className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">
                            <GiIndianPalace className="text-4xl text-stone-900"/>
                        </div>
                        <span className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">Desi</span>
                    </button>

                    <button onClick={() => handleTypeChange('snacks')}
                            className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[100px] h-[80px] text-center group md:x hover:bg-violet-800 active:bg-violet-800">
                        <div
                            className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">
                            <MdFastfood className="text-4xl text-stone-900"/>
                        </div>
                        <span
                            className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">Snacks</span>
                    </button>

                    <button onClick={() => handleTypeChange('miscs')}
                            className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[100px] h-[80px] text-center group md:x hover:bg-violet-800 active:bg-violet-800">
                        <div
                            className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">
                            <MdBakeryDining className="text-4xl text-stone-900"/>
                        </div>
                        <span
                            className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">Miscellaneous</span>
                    </button>

                    <button onClick={() => handleTypeChange('drinks')}
                            className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[100px] h-[80px] text-center group md:x hover:bg-violet-800 active:bg-violet-800">
                        <div
                            className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">
                            <BiDrink className="text-4xl text-stone-900"/>
                        </div>
                        <span
                            className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">Drinks</span>
                    </button>

                    <button onClick={() => handleTypeChange('sweets')}
                            className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[100px] h-[80px] text-center group md:x hover:bg-violet-800 active:bg-violet-800">
                        <div
                            className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">
                            <PiBowlFoodBold className="text-4xl text-stone-900"/>
                        </div>
                        <span
                            className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">Sweets</span>
                    </button>

                    <button onClick={() => handleTypeChange('nonveg')}
                            className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[100px] h-[80px] text-center group md:x hover:bg-violet-800 active:bg-violet-800">
                        <div
                            className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">
                            <GiChickenOven className="text-4xl text-stone-900"/>
                        </div>
                        <span
                            className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">Non Veg</span>
                    </button>
                </div>
            </div>

            <br/>

            <div className="flex items-center justify-between mt-3 mx-10">
                <div>
                    <h1><span className="font-black text-gray-600 text-start relative text-xl">Near </span><span
                        className="relative text-gray-600 text-xl">You</span></h1>
                </div>
                <div>
                    {/*<button><h1><span className="font-black text-gray-400 text-end relative text-xl">See All</span></h1></button>*/}
                    <button onClick={() => setShowAllItems(!showAllItems)}>
                        <h1>
                            <span className="font-black text-gray-400 text-end relative text-xl">
                                {showAllItems ? "Show Less" : "See All"}
                            </span>
                        </h1>
                    </button>
                </div>
            </div>

            <div className="relative justify-center mt-4">
                <div className="grid grid-cols-4 gap-4 mx-8 justify-center">
                    {displayedItems.map((item, index) => {

                        // let itemInCart = false;
                        //
                        // const username = userData.username;
                        // const itemid = item.itemid;
                        //
                        // let responsePromise = checkCart(username, itemid);
                        //
                        // responsePromise.then(response => {
                        //     if (response === true) {
                        //         console.log('Item is in the cart.', response);
                        //         itemInCart = true;
                        //     } else if (response === false) {
                        //         console.log('Item is not in the cart.', response);
                        //         itemInCart = false;
                        //     } else {
                        //         console.log('Error while checking cart.', response);
                        //         itemInCart = true; // Set a default value if there's an error
                        //     }
                        //
                        //     console.log(itemInCart); // You can use itemInCart wherever you want
                        // }).catch(error => {
                        //     console.error('Error while fetching cart items:', error);
                        //     itemInCart = false; // Set a default value in case of an error
                        // });


                        let itemInCart;

                        let response;

                        const Cartcheck = async (username, itemid) => {
                            try {
                                response = await checkCart(username, itemid);
                                if (response === true) {
                                    console.log('Item is in the cart.', response);
                                    return true;
                                } else if (response === false) {
                                    console.log('Item is not in the cart.', response);
                                    return false;
                                } else {
                                    console.log('Error while checking cart.', response);
                                    return true; // Set a default value if there's an error
                                }
                            } catch (error) {
                                console.error('Error while fetching cart items:', error);
                                return false; // Set a default value in case of an error
                            }
                        }

                        function checkCartItem() {
                            Cartcheck(userData.username, item.itemid)
                                .then(itemInCart => {
                                    console.log('Item in cart:', itemInCart);
                                    // console.log('Is it:', itemInCart, item.itemid);
                                })
                                .catch(error => {
                                    console.error('An error occurred:', error);
                                });
                        }

                        checkCartItem();

                        console.log('Is it: ', itemInCart, item.itemid);

                        return (
                            <div key={index}
                                 className="flex bg-white relative w-[260px] h-[270px] rounded-2xl justify-center flex-col my-4 transition-all duration-300 ease-in-out hover:scale-110 shadow-2xl">
                                <img src={carousel1} className="w-[235px] h-[185px] mx-auto rounded-2xl"
                                     alt={item.name}/>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col relative">
                                        <p className="font-black text-black text-start mt-2 ml-2 text-[16px]">{item.name}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FaStar className="mx-1 text-yellow mt-1.5"/>
                                        <p className="font-black text-black text-end mt-2 mr-2 text-[15px]">{item.rating}</p>
                                    </div>
                                </div>
                                <div
                                    className="flex text-center mx-4 flex-col-2 gap-1 relative items-center justify-start">
                                    <p className="text-black text-[14px]">₹ {item.price}</p>
                                    <p className="text-cyan-600 ml-2 text-[14px]">|</p>
                                    <div className="flex items-center">
                                        <GrLocationPin className="text-[14px] text-rose-800"/>
                                        <p className="text-black text-[14px]">KM</p>
                                    </div>
                                    <div className="mx-auto">
                                        {
                                            itemInCart ? (
                                                <p className="text-black text-[14px]">Item already added to
                                                    cart</p>
                                            ) : (
                                                <form onSubmit={addnewcart}>
                                                    <input id="item_id" name="item_id" value={item.itemid}
                                                           onChange={(e) => setItemid(e.target.value)} hidden/>
                                                    <input id="res_id" name="res_id" value={item.resid}
                                                           onChange={(e) => setResid(e.target.value)} hidden/>
                                                    <input id="quantity" name="quantity" value={1}
                                                           onChange={(e) => setQuant(e.target.value)} hidden/>
                                                    <input id="username" name="username"
                                                           value={userData.username}
                                                           onChange={(e) => setUsername(e.target.value)}
                                                           hidden/>
                                                    <button type="submit"
                                                            className="mx-auto text-xl text-green">
                                                        <LuShoppingCart/>
                                                    </button>
                                                </form>
                                            )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>


            {/*<div><img src={pot} className={'bottom-0 right-2 opacity-40 absolute w-[200px]'}/></div>*/}
            <Footer/>
        </div>
    );
};

export default Items;