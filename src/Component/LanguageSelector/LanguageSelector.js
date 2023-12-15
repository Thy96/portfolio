import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import images from "../../assets/img";

import classnames from "classnames/bind";
import styles from "./LanguageSelector.module.scss";

const cx = classnames.bind(styles);

export const LanguageSelector = ({ toggle }) => {
    const [t, i18n] = useTranslation();
    const [language, setLanguage] = useState(true)

    const handleLanguageSelector = () => {
        setLanguage(!language)
        i18n.changeLanguage(!language ? 'en' : 'vi')
    }

    return <>
        {language ? <button className={cx('btnchangelanguage', toggle ? "change-color" : "")} onClick={handleLanguageSelector}><img src={images.transEN} alt="transEN" /> <span>EN</span></button>
            :
            <button className={cx('btnchangelanguage', toggle ? "change-color" : "")} onClick={handleLanguageSelector}><img src={images.transVI} alt="transVI" /> <span>VI</span></button>}
    </>
}



