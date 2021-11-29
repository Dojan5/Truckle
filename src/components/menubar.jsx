import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export const Menubar = () => {
    const [t] = useTranslation();

    return(
        <nav className="app-menu">
            <Link to="/">{t("interface.calculator")}</Link>
            <Link to="/loading">Loading</Link>
            <Link to="/about">{t("interface.about")}</Link>
        </nav>
    )
}