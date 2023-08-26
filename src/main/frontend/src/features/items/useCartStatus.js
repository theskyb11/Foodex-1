// useCartStatus.js
import { useState, useEffect } from 'react';
import {checkCart} from "./cartInput";
// import { checkCart } from '../features/items';

export const useCartStatus = (username, itemid) => {
    const [itemInCart, setItemInCart] = useState(false);

    useEffect(() => {
        async function fetchCartStatus() {
            try {
                const response = await checkCart(username, itemid);
                setItemInCart(response === true);
            } catch (error) {
                console.error('Error while fetching cart items:', error);
            }
        }

        fetchCartStatus();
    }, [username, itemid]);

    return itemInCart;
};
