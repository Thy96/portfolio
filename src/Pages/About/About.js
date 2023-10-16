import React from "react";
import classNames from "classnames/bind";
import styles from "./About.module.scss";
import images from "../../assets/img";

const cx = classNames.bind(styles);

const About = () => {
    return (
        <main className={cx("about-page")}>
            <div className="wrapper">
                <div className="title-page">ABOUT</div>
                <div className="sub-title-page">LEARN MORE ABOUT ME</div>

                <div className="info-box">
                    <div className={cx("flex", "flex-justify")}>
                        <figure>
                            <img src={images.man} alt="man-avatar" />
                        </figure>
                        <div className={cx("introduce")}>
                            <h3>
                                I'm front-end developer with 2.5+ years of experience designing and building responsive web design and Content Management System (CMS). Proficient with CSS and JS Frameworks.
                            </h3>
                            <ul>
                                <li>
                                    Birthday: <span>21 September 1996</span>
                                </li>
                                <li>
                                    Age: <span>27</span>
                                </li>
                                <li>
                                    Github: <a href="https://github.com/Thy96" target="_blank"><span>https://github.com/Thy96</span></a>
                                </li>
                                <li>
                                    Degree: <span>The Degree Of Associate</span>
                                </li>
                                <li>
                                    Phone: <span>0937804498</span>
                                </li>
                                <li>
                                    Email: <span>caodinhthy1996@gmail.com</span>
                                </li>
                                <li>
                                    City: <span>Hồ Chí Minh</span>
                                </li>
                                <li>
                                    Freelance: <span>Available</span>
                                </li>
                            </ul>

                            <h4 className="bor-right">Skill</h4>
                            <div className={cx('skill-man', 'flex')}>
                                {/* HTML SKILL */}
                                <div className={cx('pro')}>
                                    <div className={cx('title-percent')}>
                                        <h5>HTML5</h5>
                                    </div>
                                    {/* <div className="progress progress-striped">
                                        <div className="progress-bar"></div>
                                    </div> */}
                                </div>

                                {/* PHP SKILL */}
                                <div className={cx('pro')}>
                                    <div className={cx('title-percent')}>
                                        <h5>PHP</h5>
                                    </div>
                                    {/* <div className="progress1 progress-striped">
                                        <div className="progress-bar1"></div>
                                    </div> */}
                                </div>

                                {/* CSS SKILL */}
                                <div className={cx('pro')}>
                                    <div className={cx('title-percent')}>
                                        <h5>CSS/SCSS</h5>
                                    </div>
                                    {/* <div className="progress2 progress-striped">
                                        <div className="progress-bar2"></div>
                                    </div> */}
                                </div>

                                {/* WORDPRESS/CMS SKILL */}
                                <div className={cx('pro')}>
                                    <div className={cx('title-percent')}>
                                        <h5>WORDPRESS/CMS</h5>
                                    </div>
                                    {/* <div className="progress3 progress-striped">
                                        <div className="progress-bar3"></div>
                                    </div> */}
                                </div>

                                {/* JAVASCRIPT SKILL */}
                                <div className={cx('pro')}>
                                    <div className={cx('title-percent')}>
                                        <h5>JAVASCRIPT</h5>
                                    </div>
                                    {/* <div className="progress4 progress-striped">
                                        <div className="progress-bar4"></div>
                                    </div> */}
                                </div>

                                {/* REACTJS SKILL */}
                                <div className={cx('pro')}>
                                    <div className={cx('title-percent')}>
                                        <h5>REACTJS</h5>
                                    </div>
                                    {/* <div className="progress5 progress-striped">
                                        <div className="progress-bar5"></div>
                                    </div> */}
                                </div>

                                {/* JS */}
                                <div className={cx('pro')}>
                                    <div className={cx('title-percent')}>
                                        <h5>JQuery</h5>
                                    </div>
                                    {/* <div className="progress2 progress-striped">
                                        <div className="progress-bar2"></div>
                                    </div> */}
                                </div>

                                {/* Redux */}
                                <div className={cx('pro')}>
                                    <div className={cx('title-percent')}>
                                        <h5>REDUX</h5>
                                    </div>
                                    {/* <div className="progress2 progress-striped">
                                        <div className="progress-bar2"></div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;
