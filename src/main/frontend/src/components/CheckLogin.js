import {useEffect} from "react";
import {isLoggedIn, isLoggedIn_session} from "../data/constants";

const CheckLogin = () => {
    useEffect(() => {
        if(!isLoggedIn && !isLoggedIn_session)
            window.location.href = '/login'
    }, []);
}

export default CheckLogin