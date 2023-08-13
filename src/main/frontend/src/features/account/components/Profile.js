import UserImage from "../../../components/UserImage";
import {useEffect, useState} from "react";
import {deliverAddressusers, GetUser} from "../../../services/getUser";
import {isLoggedIn, isLoggedIn_session} from "../../../data/constants";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [useradd, setUseradd] = useState(null);

    useEffect( () => {
         GetUser().then((userData) => {
            if (userData) {
                setUser(userData);
                console.log("Got User");
            }
        });
    }, [])

    useEffect(() => {
        if (user && user.username) {
            deliverAddressusers(user.username).then((useraddressData) => {
                if (useraddressData) {
                    setUseradd(useraddressData);
                    console.log("Got User Address");
                }
            });
        }
    }, [user]);

    return (
        <div className={"font-sans mt-8 ml-8"}>
            <h3 className={"font-bold"}>My Profile</h3>
            {user ? (
                <div>
                    <div className={"flex mt-6 mr-6 px-8 py-10 border-2 border-gray-100 rounded-2xl"}>
                    <UserImage dim="h-20 w-20" text={"text-3xl"} />
                    <div className={"px-8 pt-2"}>
                        <p className={"font-bold text-lg"}>{user.name}</p>
                        <p className={"text-sm text-red py-0.5 px-2 mt-1 rounded-full"}>
                            {user.username ? (
                                <div>@{user.username}</div>
                            ) : (
                                <div>Username not set</div>
                            )}</p>
                        <p className={"text-sm text-gray-400"}>{user.email}</p>
                    </div>
                </div>
                <div className={"flex mt-6 mr-6 px-8 py-6 border-2 border-gray-100 rounded-2xl"}>
                    <div className={"px-8 pt-2 flex flex-col justify-between w-full"}>
                        <h5 className={"font-bold text-lg"}>Personal Information</h5>
                        <p className={"text-gray-500 font-bold mt-6 text-sm"}>Full Name</p>
                        <p className={"font-bold text-md"}>{user.name}</p>
                        <div className={"flex mt-6 flex-row text-sm"}>
                            <div className={"w-1/2"}>
                                <p className={"text-gray-500 font-bold"}>Email Address</p>
                                <p className={"font-bold"}>{user.email}</p>
                            </div>
                            <div className={"w-1/2"}>
                                <p className={"text-gray-500 font-bold"}>Phone</p>
                                <p className={"font-bold"}>{user.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"flex mt-6 mr-6 mb-6 px-8 py-6 border-2 border-gray-100 rounded-2xl"}>
            <div className={"px-8 pt-2 flex flex-col justify-between w-full"}>
                <h5 className={"font-bold text-lg"}>Address and Registered delivering addresses</h5>
                <p className={"text-gray-500 font-bold mt-6 text-sm"}>{user.name}</p>
                <p className={"font-bold text-md"}>{user.address}</p>
                {useradd ? (
                    <div>
                        {useradd.map((item, index) => (
                                <div key={index}>
                                    <p className={"text-gray-500 font-bold mt-6 text-sm"}>{item.name}</p>
                                    <p className={"font-bold text-md"}>{item.address}</p>
                                </div>
                            )
                        )}
                    </div>
                ) : (<p></p>)}
            </div>
        </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
        // <div className={"font-sans mt-8 ml-8"}>
        //     <h3 className={"font-bold"}>My Profile</h3>
        //     <div className={"flex mt-6 mr-6 px-8 py-6 border-2 border-gray-100 rounded-2xl"}>
        //             <UserImage dim="h-20 w-20" text={"text-3xl"} />
        //             <div className={"px-8 pt-2"}>
        //                 <p className={"font-bold text-lg"}>{user.name}</p>
        //                 {/*<p className={"text-sm text-red bg-red_bg py-0.5 px-2 mt-1 rounded-full"}>*/}
        //                 {/*{user.username ? (*/}
        //                 {/*    <div>@{user.username}</div>*/}
        //                 {/*) : (*/}
        //                 {/*    <div>Username not set</div>*/}
        //                 {/*)}</p>*/}
        //                 {/*<p className={"text-sm text-gray-400"}>{user.email}</p>*/}
        //             </div>
        //     </div>
        // </div>
    )
}

export default Profile