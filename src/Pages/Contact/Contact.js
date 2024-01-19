import React from "react";
import classnames from "classnames/bind";
import styles from "./Contact.module.scss";

import { useTranslation } from 'react-i18next';

const cx = classnames.bind(styles);

const Contact = () => {
    const { t } = useTranslation()
    return (
        <main className={cx("contact-page")}>
            <div className="wrapper">
                <div className="title-page p-ani-fadeInUp p-delay_1s">{t('main.contact_page.title_page')}</div>
                <div className="sub-title-page p-ani-fadeInUp p-delay_3s">{t('main.contact_page.sub_title_page')}</div>

                <div className="info-box p-ani-fadeInUp p-delay_1s">
                    <div className={cx("flex", "flex-justify")}>
                        <div className={cx("box", "p-ani-fadeInRight", "p-delay_1s")}>
                            <figure>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                </svg>
                            </figure>
                            <div className={cx("title")}>
                                <h3>{t('main.contact_page.my_address')}</h3>
                                <p>{t('main.contact_page.address')}</p>
                            </div>
                        </div>

                        <div className={cx("box", "p-ani-fadeInRight", "p-delay_4s")}>
                            <figure>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z" />
                                </svg>
                            </figure>
                            <div className={cx("title")}>
                                <h3>{t('main.contact_page.social_profiles')}</h3>
                                <ul>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/SaCDT" target="_blank" rel="noreferrer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/sa.cdt/" target="_blank" rel="noreferrer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={cx("box", "p-ani-fadeInRight", "p-delay_6s")}>
                            <figure>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                                </svg>
                            </figure>
                            <div className={cx("title")}>
                                <h3>Email</h3>
                                <p>caodinhthy1996@gmail.com</p>
                            </div>
                        </div>

                        <div className={cx("box", "p-ani-fadeInRight", "p-delay_9s")}>
                            <figure>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                                </svg>
                            </figure>
                            <div className={cx("title")}>
                                <h3>{t('main.contact_page.call_me')}</h3>
                                <p>0937804498</p>
                            </div>
                        </div>
                    </div>

                    <div className={cx('submit-contact', "p-ani-fadeInRight", "p-delay_12s")}>
                        <form action="mail" method="post" enctype="text/plain">
                            <input type="text" name="name" className="form-control" id="name" placeholder={t('main.contact_page.your_name')} required="" />
                            <input type="email" className="form-control" name="email" id="email" placeholder={t('main.contact_page.your_email')} required="" />
                            <input type="text" className="form-control" name="subject" id="subject" placeholder={t('main.contact_page.subject')} required="" />
                            <textarea className="form-control" name="message" rows="5" placeholder={t('main.contact_page.message')} required=""></textarea>
                            <button type="submit">{t('main.contact_page.send_message')}</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
