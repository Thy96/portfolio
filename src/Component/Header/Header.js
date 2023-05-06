import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classnames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classnames.bind(styles);

const Header = ({ textEnter, textLeave }) => {
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
                    <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <NavLink to="/thy_portfolio/" className={menu_active}>
                            Home
                        </NavLink>
                    </li>
                    <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <NavLink to="/thy_portfolio/about" className={menu_active}>
                            About
                        </NavLink>
                    </li>
                    <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <NavLink to="/thy_portfolio/resume" className={menu_active}>
                            Resume
                        </NavLink>
                    </li>
                    <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <NavLink to="/thy_portfolio/service" className={menu_active}>
                            Service
                        </NavLink>
                    </li>
                    <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <NavLink to="/thy_portfolio/porfolio" className={menu_active}>
                            Portfolio
                        </NavLink>
                    </li>
                    <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <NavLink to="/thy_portfolio/contact" className={menu_active}>
                            Contact
                        </NavLink>
                    </li>
                </nav>

                <button
                    onClick={handleClick}
                    className={cx("btn-toggle", toggle ? "active-button" : "")}
                >
                    <span className={cx("line", "line1")}></span>
                    <span className={cx("line", "line2")}></span>
                    <span className={cx("line", "line3")}></span>
                </button>

                <div className={cx(toggle ? "show-menu" : "hidden-menu")}>
                    {toggle ? (
                        <nav className={cx("sp-menu")}>
                            <li>
                                <NavLink
                                    to="/thy_portfolio/"
                                    onClick={handleClick}
                                    className={menu_active}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/thy_portfolio/about"
                                    onClick={handleClick}
                                    className={menu_active}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/thy_portfolio/resume"
                                    onClick={handleClick}
                                    className={menu_active}
                                >
                                    Resume
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/thy_portfolio/service"
                                    onClick={handleClick}
                                    className={menu_active}
                                >
                                    Service
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/thy_portfolio/porfolio"
                                    onClick={handleClick}
                                    className={menu_active}
                                >
                                    Portfolio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/thy_portfolio/contact"
                                    onClick={handleClick}
                                    className={menu_active}
                                >
                                    Contact
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
