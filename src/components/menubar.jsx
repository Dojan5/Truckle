import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { CalculatorIcon, InformationIcon } from '../icons'; 

export const Menubar = () => {
    const [t] = useTranslation();

    return (
        <nav className="app-menu">
            <MenuButton to="/" icon={<CalculatorIcon />}>{t("interface.calculator")}</MenuButton>
            <MenuButton to="/loading">Loading</MenuButton>
            <MenuButton to="/about" icon={<InformationIcon />}>{t("interface.about")}</MenuButton>
        </nav>
    )
}

const MenuButton = ({ children, to, icon }) => {
    const location = useLocation();
    const match = (location.pathname === to);
    return (
        <button className={match ? "menu-button active" : "menu-button"}>
            {icon && icon}
            <Link to={to}>
                {children}
            </Link>
        </button>
    )
}