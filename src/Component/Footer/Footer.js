import React from "react";
import classnames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classnames.bind(styles);
const Footer = () => {

    return (
        <>
            <footer className={cx("footer")}>
                CopyrightⒸ 2023 Designed By Thy.
            </footer>
        </>
    );
};

export default Footer;
