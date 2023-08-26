import {toast} from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";

export const getQuantity = async (username, item_id) => {
    try {
        const response = await axios.get(`http://localhost:8085/cart/user/${username}/${item_id}`);
        const cart = response.data;

        if (cart.item_id === item_id) {
            return cart.quantity;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}

export const checkCart = async (username, itemid) => {
    try {
        const response = await axios.get(`http://localhost:8085/cart/check/${username}/${itemid}`);
        const cart = response.data;

        if (cart.length === 0) {
            console.log('No items');
            return false;
        } else {
            console.log('Items present');
            return true; // Item in cart
        }
    } catch (error) {
        console.error('Error while fetching cart items:', error);
        return null;
    }
};



// export function useCartItemQuantity
// (username, items) {
//     const [quantities, setQuantities] = useState({});
//
//     useEffect(() => {
//         async function fetchQuantities() {
//             try {
//                 const response = await axios.get(`http://localhost:8085/cart/user/${username}`);
//                 const quantitiesData = {};
//                 for (const item of items) {
//                     quantitiesData[item.item_id] = response.data.quantity;
//                 }
//                 setQuantities(quantitiesData);
//             } catch (error) {
//                 console.error('Error fetching quantities:', error);
//             }
//         }
//
//         fetchQuantities();
//     }, [username, items]);
//
//     return quantities;
// }


// export const quantity = async (username, item_id) => {
//     try {
//         const cartResponse = await axios.get(`http://localhost:8085/cart/user/${username}`);
//         const cart = cartResponse.data;
//
//         // Find the cart item with the specified item_id
//         const cartItem = cart.find(item => item.item_id === item_id);
//
//         // If the cart item exists, return its quantity; otherwise, return 0
//         return cartItem ? cartItem.quantity : 0;
//     } catch (error) {
//         // Handle the error here if needed
//         console.error("Error fetching cart:", error);
//         return null; // You can return a default value or handle the error as appropriate
//     }
// };

export const addNewToCart = async (cartData) => {
    try {
        await axios.post('http://localhost:8085/cart/add', cartData);
        toast.success('Added to cart!');
    } catch (error) {
        toast.error(error.message);
        console.error("Error adding to cart:", error);
        throw error;
    }
};


export const updateToCart = async (cartData) => {
    try {
        await axios.put('http://localhost:8085/update', cartData);

        toast.success('Added to cart');
    } catch (error) {
        toast.error(error.message)
        console.error("Error adding to cart:", error);
        throw error;
    }
};

export const removeFromCart = async (username, item_id) => {
    try {
        const response = await axios.post("http://localhost:8085/cart/remove", {
            username,
            item_id
        });
        return response.data;
    } catch (error) {
        console.error("Error removing from cart:", error);
        throw error;
    }
};
