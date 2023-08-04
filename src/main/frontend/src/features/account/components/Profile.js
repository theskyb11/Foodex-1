import UserImage from "../../../components/UserImage";
import {useEffect, useState} from "react";
import {GetUser} from "../../../services/getUser";

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect( () => {
         GetUser().then((userData) => {
            if (userData) {
                setUser(userData);
                console.log("Got User");
            }
        });
    }, []);

    return (
        <div className={"font-sans mt-8 ml-8"}>
            <h3 className={"font-bold"}>My Profile</h3>
            {user ? (
                <div className={"flex mt-6 mr-6 px-8 py-6 border-2 border-gray-100 rounded-2xl"}>
                    <UserImage dim="h-20 w-20" text={"text-3xl"} />
                    <div className={"px-8 pt-2"}>
                        <p className={"font-bold text-lg"}>{user.name}</p>
                        <p className={"text-sm text-red bg-red_bg py-0.5 px-2 mt-1 rounded-full"}>
                        {user.username ? (
                        <div>@{user.username}</div>
                        ) : (
                        <div>Username not set</div>
                        )}</p>
                        <p className={"text-sm text-gray-400"}>{user.email}</p>
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