import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
    const [t, i18n] = useTranslation()
    const currentLanguage = i18n.language;
    const setLanguage = (language: string) => {
        i18n.changeLanguage(language);
        document.cookie = `i18next=${language}`;
    }
    return (
        <fieldset className="language-switcher">
            <legend>{t("interface.language")}</legend>
            <button className={currentLanguage === 'en' ? 'active' : ''} onClick={() => setLanguage("en")}>English</button>
            <button className={currentLanguage === 'sv' ? 'active' : ''} onClick={() => setLanguage("sv")}>Svenska</button>
        </fieldset>
    );
}