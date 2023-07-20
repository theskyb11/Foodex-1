import axios from 'axios';
import {toast} from "react-toastify";

export const PostUser = async (userData) => {
    try {
        await axios.post('http://localhost:8085/user', userData);

        toast.success('Sign-up successful!');
    } catch (error) {
        toast.error(error.message);
    }
};
