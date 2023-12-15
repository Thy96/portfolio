import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames/bind";
import styles from "./Header.module.scss";

import { useTranslation } from 'react-i18next';
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";

const cx = classnames.bind(styles);

const Header = ({ hoverZoomOut, hoverZoomIn }) => {
    const { t } = useTranslation()
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    };

    // Add ClassName Active In Navlink
    let menu_active = ({ isActive }) => (isActive ? "active-menu" : "");

    return (
        <>
            <div className={cx("glitch")}></div>
            <header className={cx("menu-top", toggle ? "change-bg" : "")}>
                <nav className={cx("pc-menu")}>
                    <li onMouseEnter={hoverZoomOut} onMouseLeave={hoverZoomIn}>
                        <NavLink to="/thy_portfolio/" className={menu_active}>
                            {t('header.home')}
                        </NavLink>
                    </li>
                    <li onMouseEnter={hoverZoomOut} onMouseLeave={hoverZoomIn}>
                        <NavLink to="/thy_portfolio/about" className={menu_active}>
                            {t('header.about')}
                        </NavLink>
                    </li>
                    <li onMouseEnter={hoverZoomOut} onMouseLeave={hoverZoomIn}>
                        <NavLink to="/thy_portfolio/resume" className={menu_active}>
                            {t('header.resume')}
                        </NavLink>
                    </li>
                    <li onMouseEnter={hoverZoomOut} onMouseLeave={hoverZoomIn}>
                        <NavLink to="/thy_portfolio/service" className={menu_active}>
                            {t('header.service')}
                        </NavLink>
                    </li>
                    <li onMouseEnter={hoverZoomOut} onMouseLeave={hoverZoomIn}>
                        <NavLink to="/thy_portfolio/porfolio" className={menu_active}>
                            {t('header.portfolio')}
                        </NavLink>
                    </li>
                    <li onMouseEnter={hoverZoomOut} onMouseLeave={hoverZoomIn}>
                        <NavLink to="/thy_portfolio/contact" className={menu_active}>
                            {t('header.contact')}
                        </NavLink>
                    </li>
                    <li onMouseEnter={hoverZoomOut} onMouseLeave={hoverZoomIn}>
                        <LanguageSelector></LanguageSelector>
                    </li>
                </nav>

                <div className={cx('flex-button')}>
                    <LanguageSelector toggle={toggle}></LanguageSelector>
                    <button
                        onClick={handleClick}
                        className={cx("btn-toggle", toggle ? "active-button" : "")}
                    >
                        <span className={cx("line", "line1")}></span>
                        <span className={cx("line", "line2")}></span>
                        <span className={cx("line", "line3")}></span>
                    </button>
                </div>

                <div className={cx(toggle ? "show-menu" : "hidden-menu")}>
                    {toggle ? (
                        <nav className={cx("sp-menu")}>
                            <li>
                                <NavLink
                                    to="/thy_portfolio/"
                                    onClick={handleClick}
                                    className={menu_active}
                                >
                                    {t('header.home')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/thy_portfolio/about"
                                    onClick={handleClick}
                                    className={menu_active}
                                >
                                    {t('header.about')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/thy_portfolio/resume"
                                    onClick={handleClick}
                                    className={menu_active}
                                >
                                    {t('header.resume')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/thy_portfolio/service"
                                    onClick={handleClick}
                                    className={menu_active}
                                >
                                    {t('header.service')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/thy_portfolio/porfolio"
                                    onClick={handleClick}
                                    className={menu_active}
                                >
                                    {t('header.portfolio')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/thy_portfolio/contact"
                                    onClick={handleClick}
                                    className={menu_active}
                                >
                                    {t('header.contact')}
                                </NavLink>
                            </li>

                        </nav>
                    ) : (
                        <></>
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;
