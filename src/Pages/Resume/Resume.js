import React from 'react';
import classnames from 'classnames/bind';
import styles from './Resume.module.scss';
import { useTranslation } from 'react-i18next';

const cx = classnames.bind(styles)

const Resume = () => {
    const { t } = useTranslation()
    return (
        <main className={cx('resume-page')}>
            <div className='wrapper'>
                <div className="title-page p-ani-fadeInUp p-delay_1s">{t('main.resume_page.title_page')}</div>
                <div className="sub-title-page p-ani-fadeInUp p-delay_3s">{t('main.resume_page.sub_title_page')}</div>

                <div className='info-box'>
                    <div className={cx('flex', 'flex-justify')}>
                        <div className={cx('box', 'p-ani-fadeInBlur', 'p-delay_1s')}>
                            <h3>{t('main.resume_page.sumary.title')}</h3>
                            <div className={cx('intro')}>
                                <h4>CAO DINH THY</h4>
                                <p>{t('main.resume_page.sumary.description')}</p>
                                <ul>
                                    <li>{t('main.resume_page.sumary.address')}</li>
                                    <li>(84) 937804498</li>
                                </ul>
                            </div>
                        </div>

                        <div className={cx('box', 'p-ani-fadeInBlur', 'p-delay_3s')}>
                            <h3>{t('main.resume_page.education.title')}</h3>
                            <div className={cx('intro')}>
                                <h4>THU DUC <br className='sp-767' />COLLEGE OF TECHNOLOGY</h4>
                                <h5>2014 - 2017</h5>
                                <ul>
                                    <li>{t('main.resume_page.education.review_description1')}</li>
                                    <li>{t('main.resume_page.education.review_description2')}</li>
                                    <li>{t('main.resume_page.education.review_description3')}</li>
                                    <li>{t('main.resume_page.education.review_description4')}</li>
                                    <li>{t('main.resume_page.education.review_description5')}</li>
                                    <li>{t('main.resume_page.education.review_description6')}</li>
                                </ul>
                            </div>
                        </div>


                        <div className={cx('box', 'p-ani-fadeInBlur', 'p-delay_6s')}>
                            <h3>{t('main.resume_page.professional_experience.title')}</h3>
                            <div className={cx('intro')}>
                                <h4>JUNIOR WEBSITE DEVELOPER / WEBSITE DESIGNER</h4>
                                <h5>2017 - {t('main.resume_page.professional_experience.present')}</h5>
                                <ul>
                                    <li>{t('main.resume_page.professional_experience.review_description1')}</li>
                                    <li>{t('main.resume_page.professional_experience.review_description2')}</li>
                                    <li>{t('main.resume_page.professional_experience.review_description3')}</li>
                                    <li>{t('main.resume_page.professional_experience.review_description4')}</li>
                                    <li>{t('main.resume_page.professional_experience.review_description5')}</li>
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
