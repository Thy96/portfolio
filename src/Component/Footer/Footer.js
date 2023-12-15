import React from "react";
import classnames from "classnames/bind";
import styles from "./Footer.module.scss";

import { useTranslation } from 'react-i18next';

const cx = classnames.bind(styles);
const Footer = () => {
    const { t } = useTranslation()
    return (
        <>
            <footer className={cx("footer")}>
                CopyrightⒸ 2023 {t('footer.copyright')} Thy.
            </footer>
        </>
    );
};

export default Footer;
