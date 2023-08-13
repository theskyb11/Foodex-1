import React, { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

const TopLoadingBar = () => {
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

    return <LoadingBar color='#1e53ff' progress={progress} loaderSpeed={250} />;
};

export default TopLoadingBar;
