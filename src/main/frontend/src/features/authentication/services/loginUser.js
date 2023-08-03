import axios from 'axios';

export const signInUser = async (email, password) => {
    try {
        const response = await axios.get(`http://localhost:8085/user/email/${email}`);
        const user = response.data;

        if (user && user.password === password) {
            return true;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error while signing in:', error);
        return null;
    }
};
