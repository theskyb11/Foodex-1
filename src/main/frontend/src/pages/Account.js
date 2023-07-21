import {useEffect, useState} from 'react';
import Profile from "../features/account/components/Profile";
import PaymentMethods from "../features/account/components/PaymentMethods";
import PrivacySecurity from "../features/account/components/Privacy";
import Orders from "../features/account/components/Orders";
import Transactions from "../features/account/components/Transactions";
import Settings from "../features/account/components/Settings";
import Navbar from "../layouts/Navbar";
import LoadingBar from "react-top-loading-bar";

function Account() {
    const [selectedTab, setSelectedTab] = useState('profile');

    // Render the component based on the selected tab
    const renderComponent = () => {
        switch (selectedTab) {
            case 'profile':
                return <Profile />;
            case 'paymentMethods':
                return <PaymentMethods />;
            case 'privacySecurity':
                return <PrivacySecurity />;
            case 'orders':
                return <Orders />;
            case 'transactions':
                return <Transactions />;
            case 'settings':
                return <Settings />;
            default:
                return null;
        }
    };

    const [progress, setProgress] = useState(0);


    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress + 100;
                if (newProgress >= 100) {
                    clearInterval(timer);
                }
                return newProgress;
            });
        }, 50);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={"bg-gray-100 w-full h-screen"}>
            <LoadingBar
                color='#1e53ff'
                progress={progress}
                loaderSpeed={250}
            />
            <Navbar />
            <h4 className={"font-bold text-2xl pl-10 pt-8"}>Account Settings</h4>
            <div className={"rounded-2xl  bg-white flex w-8/9 mx-10 my-8 "}>
                <div className="flex-none flex-col w-1/5 border-r-2 border-gray-100 pl-8">
                    <p
                        className={`p-2 mt-6 cursor-pointer duration-100 text-l_grey font-sans text-sm ${
                            selectedTab === 'profile' ? 'font-bold text-gray-800 bg-gray-100 border-r-2 border-r-blue' : ''
                        }`}
                        onClick={() => setSelectedTab('profile')}
                    >
                        My Profile
                    </p>
                    <p
                        className={`p-2 my-4 cursor-pointer duration-100 text-l_grey font-sans text-sm ${
                            selectedTab === 'paymentMethods' ? 'font-bold text-gray-800 bg-gray-100 border-r-2 border-r-blue' : ''
                        }`}
                        onClick={() => setSelectedTab('paymentMethods')}
                    >
                        Payment Methods
                    </p>
                    <p
                        className={`p-2 my-4 cursor-pointer duration-100 text-l_grey font-sans text-sm ${
                            selectedTab === 'privacySecurity' ? 'font-bold text-gray-800 bg-gray-100 border-r-2 border-r-blue' : ''
                        }`}
                        onClick={() => setSelectedTab('privacySecurity')}
                    >
                        Privacy & Security
                    </p>
                    <p
                        className={`p-2 my-4 cursor-pointer duration-100 text-l_grey font-sans text-sm ${
                            selectedTab === 'orders' ? 'font-bold text-gray-800 bg-gray-100 border-r-2 border-r-blue' : ''
                        }`}
                        onClick={() => setSelectedTab('orders')}
                    >
                        Orders
                    </p>
                    <p
                        className={`p-2 my-4 cursor-pointer duration-100 text-l_grey font-sans text-sm ${
                            selectedTab === 'transactions' ? 'font-bold text-gray-800 bg-gray-100 border-r-2 border-r-blue' : ''
                        }`}
                        onClick={() => setSelectedTab('transactions')}
                    >
                        Transactions
                    </p>
                    <p
                        className={`p-2 my-4 cursor-pointer duration-100 text-l_grey font-sans text-sm ${
                            selectedTab === 'settings' ? 'font-bold text-gray-800 bg-gray-100 border-r-2 border-r-blue' : ''
                        }`}
                        onClick={() => setSelectedTab('settings')}
                    >
                        Settings
                    </p>
                </div>
                <div className="flex-auto w-4/5">{renderComponent()}</div>
            </div>
        </div>
    );
}

export default Account;
