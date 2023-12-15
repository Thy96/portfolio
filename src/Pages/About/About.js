import React from "react";
import classNames from "classnames/bind";
import styles from "./About.module.scss";
import images from "../../assets/img";
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

const About = () => {
    const { t } = useTranslation()
    return (
        <main className={cx("about-page")}>
            <div className="wrapper">
                <div className="title-page p-ani-fadeInUp p-delay_1s">{t('main.about_page.title_page')}</div>
                <div className="sub-title-page p-ani-fadeInUp p-delay_3s">{t('main.about_page.sub_title_page')}</div>

                <div className="info-box">
                    <div className={cx("flex", "flex-justify")}>
                        <figure className="p-ani-fadeInLeft p-delay_3s">
                            <img src={images.man} alt="man-avatar" />
                        </figure>
                        <div className={cx("introduce")}>
                            <h3 className="p-ani-fadeInRight p-delay_6s">
                                {t('main.about_page.introduce_about_me1')}
                            </h3>
                            <ul className="p-ani-fadeInRight p-delay_9s">
                                <li>
                                    {t('main.about_page.introduce_about_me2.title_birthday')}: <span>{t('main.about_page.introduce_about_me2.date_birthday')}</span>
                                </li>
                                <li>
                                    {t('main.about_page.introduce_about_me2.title_age')}: <span>27</span>
                                </li>
                                <li>
                                    Github: <a href="https://github.com/Thy96" target="_blank" rel="noreferrer"><span>https://github.com/Thy96</span></a>
                                </li>
                                <li>
                                    {t('main.about_page.introduce_about_me2.title_degree')}: <span>{t('main.about_page.introduce_about_me2.vocational_degree')}</span>
                                </li>
                                <li>
                                    {t('main.about_page.introduce_about_me2.title_phone')}: <span>0937804498</span>
                                </li>
                                <li>
                                    Email: <span>caodinhthy1996@gmail.com</span>
                                </li>
                                <li>
                                    {t('main.about_page.introduce_about_me2.title_city')}: <span>{t('main.about_page.introduce_about_me2.name_city')}</span>
                                </li>
                            </ul>

                            <h4 className="bor-right p-ani-fadeInRight p-delay_12s">{t('main.about_page.skill')}</h4>
                            <div className={cx('skill-man', 'flex', "p-ani-fadeInRight", "p-delay_12s")}>
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
