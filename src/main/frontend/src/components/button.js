import React from 'react';
import {HashLoader} from "react-spinners";

const Button = ({ isLoading, onClick, text }) => {
    return (
        <button
            type="button"
            className="flex w-full justify-center items-center rounded-md bg-blue px-3 py-1.5 h-[35px] text-sm font-semibold leading-6 text-white shadow-sm"
            disabled={isLoading}
            onClick={onClick}
        >
            {isLoading ? (
                <HashLoader
                    color="#ffffff"
                    size={20}
                />
            ) : (
                text
            )}
        </button>
    );
};

export default Button;
