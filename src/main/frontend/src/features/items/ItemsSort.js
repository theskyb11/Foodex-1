import axios from "axios";

export const getItems = async (type) => {
    try{
        const response = await axios.get(`http://localhost:8085/items/${type}`);

        const items = response.data;
        return items;
    }
    catch (error){
        console.log('Error fetching items:', error);
        return [];
    }
};

// import axios from "axios";
//
// export const getItems = async (type) => {
//     try {
//         const response = await axios.get(`http://localhost:8085/items/${type}`);
//         const items = response.data;
//
//         // Fetch associated item_images for each item
//         const itemPromises = items.map(async (item) => {
//             const itemResponse = await axios.get(`http://localhost:8085/item_images/${item.item_id}`);
//             item.images = [itemResponse.data]; // Set images as an array containing the response data
//             return item;
//         });
//
//         // Wait for all the itemPromises to resolve
//         const itemsWithImages = await Promise.all(itemPromises);
//
//         return itemsWithImages;
//     } catch (error) {
//         console.log('Error fetching items:', error);
//         return [];
//     }
// };


// export const getItemsImage = async (id) => {
//     try{
//         const response = await axios.get(`http://localhost:8085/item_images/${id}`);
//
//         const items = response.data;
//         return items;
//     }
//     catch (error){
//         console.log('Error fetching items:', error);
//         return [];
//     }
// };