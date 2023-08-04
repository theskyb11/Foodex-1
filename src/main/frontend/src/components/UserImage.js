import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {getUserByEmail} from "../services/getUser";

const UserImage = ({dim, text}) => {
    const [image, setImage] = useState([]);
    const [user, setUser] = useState(null);

     const GetUser = async () => {
        await getUserByEmail()
            .then((userData) => {
                setUser(userData);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }

    const getImage = async () => {
        await GetUser();

        if(user) {
            await axios.get(`http://localhost:8085/user_image/${user.username}`)
                .then((response) => {
                    setImage(response.data);
                })
                .catch((error) => {
                    console.error('Error while fetching images:', error);
                });
        } else {
            setImage(null);
        }
    }

    useEffect(() => {
        getImage().then(r => console.log("Got promise"));
    }, []);

    return (
        <div>
            <div>
                {image ? (
                    image.map((image) => (
                        <div>
                            <img
                                key={image.id}
                                src={`data:image/png;base64,${image.data}`}
                                alt={`Image ${image.id}`}
                                className={`${dim} object-cover`}
                            />
                        </div>
                    ))
                ) : (
                    <div
                        className={`${dim} ${text} text-white bg-gradient-to-tr from-sky-900 to-blue rounded-full flex items-center justify-center`}
                    >{user.name.charAt(0).toUpperCase()}</div>
                )}
            </div>
        </div>
    );
};

export default UserImage;
