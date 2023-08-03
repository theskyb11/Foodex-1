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