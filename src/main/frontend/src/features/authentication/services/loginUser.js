import axios from 'axios';

export const signInUser = async (email, password) => {
    try {
        const response = await axios.get(`http://localhost:8085/user/email/${email}`);
        const user = response.data;

        // Check if the user exists and the password matches
        if (user && user.password === password) {
            return true;
        } else {
            return null;
        }
    } catch (error) {
        // Handle the error here (e.g., show an error message or log it)
        console.error('Error while signing in:', error);
        return null;
    }
};
