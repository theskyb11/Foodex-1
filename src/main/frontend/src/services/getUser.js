import axios from "axios";
import {email, email_session} from "../data/constants";

export async function getUserByEmail() {
    let response;
    try {
        if(email)
            response = await axios.get(`http://localhost:8085/user/email/${email}`);
        else
            response = await axios.get(`http://localhost:8085/user/email/${email_session}`);
        return response.data;
    } catch (error) {
        return null;
    }
}

export const GetUser = async () => {
    try {
        return await getUserByEmail();
    } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
    }
};