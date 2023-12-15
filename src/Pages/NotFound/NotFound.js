import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

import classNames from "classnames/bind";
import styles from "./NotFound.module.scss";

import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

const NotFound = ({ hoverZoomOut, hoverZoomIn }) => {
    const { t } = useTranslation()
    return (
        <main className={cx('page-not-found')}>
            <div className={cx('not-found')}>
                <h2>404</h2>
                <h3>{t('main.not_found_page.error_not_found')}</h3>
            </div>
            <div className={cx('link-home')}>
                <Link to="/thy_portfolio/" onMouseEnter={hoverZoomOut} onMouseLeave={hoverZoomIn}>
                    <span className={cx('animation-icon')}><FontAwesomeIcon icon={faArrowLeftLong} /></span> {t('main.not_found_page.button_gohome')}
                </Link>
            </div>

        </main>
    )
};

export default NotFound;