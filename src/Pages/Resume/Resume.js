import React from 'react';
import classnames from 'classnames/bind';
import styles from './Resume.module.scss';

const cx = classnames.bind(styles)

const Resume = () => {
    return (
        <main className={cx('resume-page')}>
            <div className='wrapper'>
                <div className="title-page">RESUME</div>
                <div className="sub-title-page">CHECK MY RESUME</div>

                <div className='info-box'>
                    <div className={cx('flex', 'flex-justify')}>
                        <div className={cx('box')}>
                            <h3>Sumary</h3>
                            <div className={cx('intro')}>
                                <h4>CAO DINH THY</h4>
                                <p>Hello! I'm a Front-End DEV. Basically, I like creating cool designs and creating polished & meaningful user experiences.
                                </p>
                                <ul>
                                    <li>166/3 Dang Van Bi Street, Binh Tho Ward, <br />Thu Duc City, Ho Chi Minh City</li>
                                    <li>(84) 937804498</li>
                                </ul>
                            </div>
                        </div>

                        <div className={cx('box')}>
                            <h3>Education</h3>
                            <div className={cx('intro')}>
                                <h4>THU DUC <br className='sp-767' />COLLEGE OF TECHNOLOGY</h4>
                                <h5>2014 - 2017</h5>
                                <ul>
                                    <li>Study Photograph website design.</li>
                                    <li>Design website interface with HTML, CSS, JS for customers.</li>
                                    <li>Observe, learn and catch customers’ taste well.</li>
                                    <li>Improve work skills.</li>
                                    <li>Assist in controlling products goods.</li>
                                    <li>Attend the coder skills course at the school.</li>
                                </ul>
                            </div>
                        </div>


                        <div className={cx('box')}>
                            <h3>Professional <br className='sp-767' />Experience</h3>
                            <div className={cx('intro')}>
                                <h4>JUNIOR WEBSITE DEVELOPER / WEBSITE DESIGNER</h4>
                                <h5>2017 - Present</h5>
                                <ul>
                                    <li>I have been working for 6 months in freelancer projects.</li>
                                    <li>I started working at Hong Kong's 2epay company for about 1 year in website design management.</li>
                                    <li>I started working at Japanese company Protage for about a year and a half on designing effects.</li>
                                    <li>I started working at Japanese company Allgrowlabo for about 3 year on WORDPRESS/CMS.</li>
                                    <li>Design mobile website and programming PC according to customer requirements.</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </main>
    );
}

export default Resume;
