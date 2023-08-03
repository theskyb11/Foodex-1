import {isLoggedIn} from "../data/constants";

export default function logoutUser() {
    if(isLoggedIn)
    {
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('remember')
        localStorage.removeItem('email')
    } else {
        sessionStorage.removeItem('isLoggedIn')
        sessionStorage.removeItem('remember')
        sessionStorage.removeItem('email')
    }

    window.location.reload();
}