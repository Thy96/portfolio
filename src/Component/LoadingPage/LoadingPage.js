import React, { useEffect } from "react";
import Lottie from "react-lottie";
import * as location from "../../assets/json_loading_page/79794-world-locations.json";
import * as success from "../../assets/json_loading_page/1127-success.json";

import classnames from 'classnames/bind';
import styles from './LoadingPage.module.scss';

const cx = classnames.bind(styles)

const LoadingPage = ({ loading, setloading, completed, setcompleted }) => {
    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: location.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: success.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };


    useEffect(() => {
        setTimeout(() => {
            setloading(true);
            setTimeout(() => {
                setcompleted(true);
            }, 1000);
        }, 2000);
    }, [setloading, setcompleted]);

    return (
        <>
            <div className={cx('loading-page', !completed ? 'show' : 'hide')}>
                {!completed ? (
                    <>
                        {!loading ? (
                            <Lottie
                                options={defaultOptions1}
                                height={200}
                                width={200}
                            />
                        ) : (
                            <Lottie
                                options={defaultOptions2}
                                height={100}
                                width={100}
                            />
                        )}
                    </>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
};

export default LoadingPage;
