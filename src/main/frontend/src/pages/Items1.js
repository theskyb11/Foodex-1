// import React, {useEffect, useState} from 'react';
// import Footer from "../layouts/Footer";
// import { carousel1, carousel2, carousel3, carousel4, carousel5}  from '../assets/img'
// import LoadingBar from "react-top-loading-bar";
// import Navbar from "../layouts/Navbar";
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
//
// const Items = () => {
//
//     const cuisines =[
//         {
//             id:1,
//             type:'',
//         },
//         {
//             id:1,
//             type:'',
//         },
//         {
//             id:1,
//             type:'',
//         },
//     ]
//
//     const slides = [
//         {
//             url: carousel1,
//         },
//         {
//             url: carousel2,
//         },
//         {
//             url: carousel3,
//         },
//         {
//             url: carousel4,
//         },
//         {
//             url: carousel5,
//         },
//     ];
//
//     const [progress, setProgress] = useState(0);
//
//     const slideLeft = () => {
//         var slider = document.getElementById('slider');
//         slider.scrollLeft = slider.scrollLeft - 500;
//     };
//
//     const slideRight = () => {
//         var slider = document.getElementById('slider');
//         slider.scrollLeft = slider.scrollLeft + 500;
//     };
//
//     // useEffect(() => {
//     //     // Set the interval to automatically slide after 3 seconds
//     //     const interval = setInterval(() => {
//     //         slideRight(); // Slide right first
//     //         setTimeout(slideLeft, 3000); // After 3 seconds, slide left
//     //     }, 6000); // Total interval is 6 seconds (3 seconds for each slide)
//     //
//     //     // Clear the interval when the component unmounts
//     //     return () => clearInterval(interval);
//     // }, []);
//
//     const Carousel = () => {
//         useEffect(() => {
//             const interval = setInterval(() => {
//                 slideRight();
//             }, 3000);
//
//             return () => clearInterval(interval);
//         }, []);
//
//
//     return(
//       <div className={"h-screen scroll-smooth"}>
//           <LoadingBar
//               color='#1e53ff'
//               progress={progress}
//               loaderSpeed={250}
//           />
//           <Navbar />
//
//           <div className='relative flex gap-10 items-center bg-violet-1000'>
//               <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
//               <div
//                   id='slider'
//                   className='w-screen h-[250px] overflow-hidden whitespace-nowrap scroll-smooth scrollbar-hide'
//               >
//                   {slides.map((item) => (
//                       <img
//                           key={item.id}
//                           className='w-[250px] inline-block mx-4 my-auto p-2 cursor-pointer rounded hover:scale-105 ease-in-out duration-300'
//                           src={item.url}
//                           alt='/'
//                       />
//                   ))}
//               </div>
//               <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
//           </div>
//
//
//           {/*<div className="container-fluid bg-gradient-to-r from-[#171a29] via-[#141725] to-[#202538]">*/}
//           {/*    <div className="row">*/}
//           {/*        <div className="splide">*/}
//           {/*            <div className="splide__track">*/}
//           {/*                <div className="splide__list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">*/}
//           {/*                    <div className="splide__slide">*/}
//           {/*                        <div className="card text-white">*/}
//           {/*                            <div className="card-body">*/}
//           {/*                                <img src={carousel1} className="w-80" />*/}
//           {/*                            </div>*/}
//           {/*                        </div>*/}
//           {/*                    </div>*/}
//           {/*                    <div className="splide__slide">*/}
//           {/*                        <div className="card text-white">*/}
//           {/*                            <div className="card-body">*/}
//           {/*                                <img src={carousel2} className="w-80" />*/}
//           {/*                            </div>*/}
//           {/*                        </div>*/}
//           {/*                    </div>*/}
//           {/*                    <div className="splide__slide">*/}
//           {/*                        <div className="card text-white">*/}
//           {/*                            <div className="card-body">*/}
//           {/*                                <img src={carousel3} className="w-80" />*/}
//           {/*                            </div>*/}
//           {/*                        </div>*/}
//           {/*                    </div>*/}
//           {/*                    <div className="splide__slide">*/}
//           {/*                        <div className="card text-white">*/}
//           {/*                            <div className="card-body">*/}
//           {/*                                <img src={carousel4} className="w-80" />*/}
//           {/*                            </div>*/}
//           {/*                        </div>*/}
//           {/*                    </div>*/}
//           {/*                    <div className="splide__slide">*/}
//           {/*                        <div className="card text-white">*/}
//           {/*                            <div class="card-body">*/}
//           {/*                                <img src={carousel5} class="w-80" />*/}
//           {/*                            </div>*/}
//           {/*                        </div>*/}
//           {/*                    </div>*/}
//           {/*                </div>*/}
//           {/*            </div>*/}
//           {/*        </div>*/}
//           {/*    </div>*/}
//           {/*</div>*/}
//
//
//       </div>
//     );
// }
//
// export default Items;
import React, { useEffect, useState } from 'react';
import Footer from '../layouts/Footer';
import { carousel1, carousel2, carousel3, carousel4, carousel5, pot } from '../assets/img';
import LoadingBar from 'react-top-loading-bar';
import Navbar from '../layouts/Navbar';
import { MdChevronLeft, MdChevronRight, MdFastfood, MdBakeryDining } from 'react-icons/md';
import { FiGlobe } from "react-icons/fi";
import { BiDrink, BiSolidFoodMenu } from "react-icons/bi";
import { PiBowlFoodBold } from "react-icons/pi";
import {GiChickenOven, GiIndianPalace} from "react-icons/gi";
import {getItems} from "../features/items/ItemsSort";
import axios from "axios";

const Items = () => {

    const [itemsListOrg, setItemsListOrg] = useState([]);

    // useEffect(() => {
    //     setItemsList(itemss);
    //     setItemsListOrg(itemss);
    // }, []);

    // const filterItems = (type) => {
    //     if (type === 'All') {
    //         setItemsList(itemsListOrg);
    //     } else {
    //         const result = itemsListOrg.filter((item) => item.type === type);
    //         setItemsList(result);
    //     }
    // };

    const [selectedType, setSelectedType] = useState("All"); // Default selected type is "All"
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems(selectedType);
    }, [selectedType]);

    const fetchItems = async (type) => {
        try {
            const itemsData = await getItems(type);
            setItems(itemsData);
        } catch (error) {
            console.log("Error fetching items:", error);
        }
    };

    const handleTypeChange = (type) => {
        setSelectedType(type);
    };


    // ------------

    // const [items, setItems] = useState([]);
    //
    // useEffect(() => {
    //     // Function to fetch items from the server API
    //     const fetchItemsData = async () => {
    //         try {
    //             const response = await axios.get('/items'); // Replace '/items' with the actual API endpoint that corresponds to the getAllItems() method in your controller
    //             setItems(response.data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //
    //     fetchItemsData();
    // }, []);


    // ------------

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

    return (
        <div className={'h-screen scroll-smooth'}>
            <LoadingBar color='#1e53ff' progress={progress} loaderSpeed={250} />
            <Navbar />

            <div className='relative flex gap-10 items-center bg-indigo-950'>
                <MdChevronLeft
                    className='opacity-50 cursor-pointer hover:opacity-100 bg-stone-300 rounded-2xl '
                    onClick={slideLeft}
                    size={40}
                />
                <div id='slider' className='w-screen h-[250px] overflow-hidden bg-indigo-950 whitespace-nowrap scroll-smooth scrollbar-hide'>
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

            <h1><span className={'font-black relative ml-10 text-xl'}>Menu </span><span  className={'relative text-xl'}>Category</span></h1>

            {/*<div className="relative text-center gap-4 justify-center mt-4">*/}
            {/*    <div className="flex flex-col-4 gap-5 ml-10 mt-10 items-center">*/}
            {/*        <div className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[110px] h-[80px] text-center group md:x  hover:bg-violet-800 active:bg-violet-800">*/}
            {/*            <div className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">*/}
            {/*                <FiGlobe className="text-4xl text-stone-900" />*/}
            {/*            </div>*/}
            {/*            <span className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">International</span>*/}
            {/*        </div>*/}
            {/*        <div className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[100px] h-[80px] text-center group md:x  hover:bg-violet-800">*/}
            {/*            <div className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">*/}
            {/*                <GiIndianPalace className="text-4xl text-stone-900" />*/}
            {/*            </div>*/}
            {/*            <span className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">Desi</span>*/}
            {/*        </div>*/}
            {/*        <div className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[100px] h-[80px] text-center group md:x  hover:bg-violet-800 active:bg-violet-800">*/}
            {/*            <div className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">*/}
            {/*                <MdFastfood className="text-4xl text-stone-900" />*/}
            {/*            </div>*/}
            {/*            <span className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">Snacks</span>*/}
            {/*        </div>*/}
            {/*        <div className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[100px] h-[80px] text-center group md:x  hover:bg-violet-800 active:bg-violet-800">*/}
            {/*            <div className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">*/}
            {/*                <MdBakeryDining className="text-4xl text-stone-900" />*/}
            {/*            </div>*/}
            {/*            <span className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">Miscellaneous</span>*/}
            {/*        </div>*/}
            {/*        <div className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[100px] h-[80px] text-center group md:x  hover:bg-violet-800 active:bg-violet-800">*/}
            {/*            <div className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">*/}
            {/*                <BiDrink className="text-4xl text-stone-900" />*/}
            {/*            </div>*/}
            {/*            <span className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">Drinks</span>*/}
            {/*        </div>*/}
            {/*        <div className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[100px] h-[80px] text-center group md:x  hover:bg-violet-800 active:bg-violet-800">*/}
            {/*            <div className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">*/}
            {/*                <PiBowlFoodBold className="text-4xl text-stone-900" />*/}
            {/*            </div>*/}
            {/*            <span className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">Sweets</span>*/}
            {/*        </div>*/}
            {/*        <div className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[100px] h-[80px] text-center group md:x  hover:bg-violet-800 active:bg-violet-800">*/}
            {/*            <div className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">*/}
            {/*                <GiChickenOven className="text-4xl text-stone-900" />*/}
            {/*            </div>*/}
            {/*            <span className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">Non Veg</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="relative text-center gap-4 justify-center mt-4">
                <div className="flex flex-col-4 gap-5 ml-10 mt-10 items-center">
                    <button onClick={() => handleTypeChange('All')} className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[110px] h-[80px] text-center group md:x hover:bg-violet-800 active:bg-violet-800">
                        <div className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">
                            <BiSolidFoodMenu className="text-4xl text-stone-900" />
                        </div>
                        <span className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">All Delicacy</span>
                    </button>

                    <button onClick={() => handleTypeChange('international')} className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[110px] h-[80px] text-center group md:x hover:bg-violet-800 active:bg-violet-800">
                        <div className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">
                            <FiGlobe className="text-4xl text-stone-900" />
                        </div>
                        <span className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">International</span>
                    </button>

                    <button onClick={() => getItems('desi')} className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[100px] h-[80px] text-center group md:x hover:bg-violet-800 active:bg-violet-800">
                        <div className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">
                            <GiIndianPalace className="text-4xl text-stone-900" />
                        </div>
                        <span className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">Desi</span>
                    </button>

                    <button onClick={() => getItems('snacks')} className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[100px] h-[80px] text-center group md:x hover:bg-violet-800 active:bg-violet-800">
                        <div className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">
                            <MdFastfood className="text-4xl text-stone-900" />
                        </div>
                        <span className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">Snacks</span>
                    </button>

                    <button onClick={() => getItems('miscs')} className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[100px] h-[80px] text-center group md:x hover:bg-violet-800 active:bg-violet-800">
                        <div className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">
                            <MdBakeryDining className="text-4xl text-stone-900" />
                        </div>
                        <span className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">Miscellaneous</span>
                    </button>

                    <button onClick={() => getItems('drinks')} className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[100px] h-[80px] text-center group md:x hover:bg-violet-800 active:bg-violet-800">
                        <div className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">
                            <BiDrink className="text-4xl text-stone-900" />
                        </div>
                        <span className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">Drinks</span>
                    </button>

                    <button onClick={() => getItems('sweets')} className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[100px] h-[80px] text-center group md:x hover:bg-violet-800 active:bg-violet-800">
                        <div className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">
                            <PiBowlFoodBold className="text-4xl text-stone-900" />
                        </div>
                        <span className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">Sweets</span>
                    </button>

                    <button onClick={() => getItems('nonveg')} className="bg-gray-50 rounded-3xl items-center drop-shadow-xl text-stone-900 w-[100px] h-[80px] text-center group md:x hover:bg-violet-800 active:bg-violet-800">
                        <div className="bg-white relative rounded-2xl mx-auto w-[60px] h-[60px] top-[-20px] flex items-center justify-center">
                            <GiChickenOven className="text-4xl text-stone-900" />
                        </div>
                        <span className="text-sm bottom-3 absolute left-0 right-0 md:group-hover:text-white">Non Veg</span>
                    </button>
                </div>
            </div>

            <div className="relative text-center gap-4 justify-center mt-4">
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <p className={'text-black'}>{item.name}</p>
                            <p className={'text-black'}>Price: {item.price}</p>
                            <p className={'text-black'}>Rating: {item.rating}</p>
                        </li>
                    ))}
                </ul>
            </div>


            {/*<ul>*/}
            {/*    {items.map((item) => (*/}
            {/*        <li key={item.item_id} className={'text-black'}>*/}
            {/*            <p className={'text-black'}>Item ID: {item.item_id}</p>*/}
            {/*            <p className={'text-black'}>Item Name: {item.item_name}</p>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}

            <div><img src={pot} className={'bottom-0 right-2 opacity-40 absolute w-[200px]'}/></div>
            <Footer />
        </div>
    );
};

export default Items;
