import React from "react";
import classNames from "classnames/bind";
import styles from "./About.module.scss";
import images from "../../assets/img";
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles);

const About = () => {
    const { t } = useTranslation()

    const onButtonClickDownPDF = () => {
        const pdfUrl = "CaoDinhThy_CV.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CaoDinhThy_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <main className={cx("about-page")}>
            <div className="wrapper">
                <div className="title-page p-ani-fadeInUp p-delay_1s">{t('main.about_page.title_page')}</div>
                <div className="sub-title-page p-ani-fadeInUp p-delay_3s">{t('main.about_page.sub_title_page')}</div>

                <div className="info-box p-ani-fadeInUp p-delay_1s">
                    <div className={cx("flex", "flex-justify")}>
                        <div className={cx('img-pdf')}>
                            <figure className="p-ani-fadeInLeft p-delay_3s">
                                <img src={images.man} alt="man-avatar" />
                            </figure>
                            <button onClick={onButtonClickDownPDF} className={cx('button-pdf', 'p-ani-fadeInLeft p-delay_6s')}>
                                <span className={cx('circle2')}>
                                    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                                </span>
                                <span className={cx('title2')}>{t('main.about_page.download_cv')}</span>
                                <span className={cx('title-hover2')}>{t('main.about_page.click_here')}</span>
                            </button>
                        </div>
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
                                </div>

                                {/* PHP SKILL */}
                                <div className={cx('pro')}>
                                    <div className={cx('title-percent')}>
                                        <h5>PHP</h5>
                                    </div>
                                </div>

                                {/* CSS SKILL */}
                                <div className={cx('pro')}>
                                    <div className={cx('title-percent')}>
                                        <h5>CSS/SCSS</h5>
                                    </div>
                                </div>

                                {/* WORDPRESS/CMS SKILL */}
                                <div className={cx('pro')}>
                                    <div className={cx('title-percent')}>
                                        <h5>WORDPRESS/CMS</h5>
                                    </div>
                                </div>

                                {/* JAVASCRIPT SKILL */}
                                <div className={cx('pro')}>
                                    <div className={cx('title-percent')}>
                                        <h5>JAVASCRIPT</h5>
                                    </div>
                                </div>

                                {/* REACTJS SKILL */}
                                <div className={cx('pro')}>
                                    <div className={cx('title-percent')}>
                                        <h5>REACTJS</h5>
                                    </div>
                                </div>

                                {/* JS */}
                                <div className={cx('pro')}>
                                    <div className={cx('title-percent')}>
                                        <h5>JQuery</h5>
                                    </div>
                                </div>

                                {/* Redux */}
                                <div className={cx('pro')}>
                                    <div className={cx('title-percent')}>
                                        <h5>REDUX</h5>
                                    </div>
                                </div>

                                {/* GSAP */}
                                <div className={cx('pro')}>
                                    <div className={cx('title-percent')}>
                                        <h5>GSAP</h5>
                                    </div>
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
