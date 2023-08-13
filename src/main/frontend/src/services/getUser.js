import axios from "axios";
import {email, email_session, username, username_session} from "../data/constants";

// export async function getUserByEmail() {
//     let response;
//     try {
//         if(email)
//             response = await axios.get(`http://localhost:8085/user/email/${email}`);
//         else
//             response = await axios.get(`http://localhost:8085/user/email/${email_session}`);
//         return response.data;
//     } catch (error) {
//         return null;
//     }
// }

export async function getUserByEmail() {
    let response;
    try {
        if(username)
            response = await axios.get(`http://localhost:8085/user/${username}`);
        // if(email)
        //     response = await axios.get(`http://localhost:8085/user/email/${email}`);
        else
            response = await axios.get(`http://localhost:8085/user/${username_session}`);
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

export const checkUsernameAvailability = (username) => {
    return axios
        .get(`http://localhost:8085/user/${username}`)
        .then((response) => {
            // Username exists in the database
            return false;
        })
        .catch((error) => {
            // Username does not exist in the database
            return true;
        });
};

export const deliverAddressusers = async (username) => {
    let response;
    try{
        response = await axios.get(`http://localhost:8085/deliver_address/${username}`);
        return response.data;
    }
    catch(error){
        return null;
    }
}

export const checkEmailAvailability = (email) => {
    return axios
        .get(`http://localhost:8085/user/email/${email}`)
        .then((response) => {
            // Username exists in the database
            return false;
        })
        .catch((error) => {
            // Username does not exist in the database
            return true;
        });
};