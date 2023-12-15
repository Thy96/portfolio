import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../../Language/locales/en/translationEN.json';
import translationVI from '../../Language/locales/vi/translationVI.json';
// the translations

const resources = {
    en: {
        translation: translationEN
    },
    vi: {
        translation: translationVI
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    });

export default i18n;