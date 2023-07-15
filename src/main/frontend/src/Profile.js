// import NavBar from "./Navbar";
import {useEffect} from "react";

const Profile = () => {
    useEffect(() => {
        document.title = 'Your Profile | Foodex';
    }, []);

    return (
        <div className={"font-sans"}>
            {/*<NavBar/>*/}
            <div className={"bg-gray-100 w-full h-screen "}>
                <h4 className={"font-bold text-2xl pl-10 pt-8"}>Account Settings</h4>
                <div className={"rounded-2xl bg-white flex w-8/9 mx-10 my-8 "}>
                    <div
                        className="flex-none flex-col w-1/5 border-r-2 border-gray-100 pl-8">
                        <p className={"p-2 mt-6 text-l_grey border-r-2 border-r-blue font-sans text-sm "}>
                            My Profile
                        </p>
                        <p className={"p-2 my-4 rounded-3xl text-l_grey font-sans text-sm "}>
                            Payment Methods
                        </p>
                        <p className={"p-2 my-4 rounded-3xl text-l_grey font-sans text-sm "}>
                            Privacy & Security
                        </p>
                        <p className={"p-2 my-4 rounded-3xl text-l_grey font-sans text-sm "}>
                            Orders
                        </p>
                        <p className={"p-2 my-4 rounded-3xl text-l_grey font-sans text-sm "}>
                            Transactions
                        </p>
                        <p className={"p-2 my-4 rounded-3xl text-l_grey font-sans text-sm "}>
                            Settings
                        </p>
                    </div>
                    <div className="flex-auto w-4/5">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile