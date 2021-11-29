import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { CalculatorIcon, InformationIcon } from '../icons'; 

export const Menubar = () => {
    const [t] = useTranslation();

    return (
        <nav className="app-menu">
            <MenuButton to="/" icon={<CalculatorIcon />}>{t("interface.calculator")}</MenuButton>
            {(process.env.NODE_ENV && process.env.NODE_ENV === 'development') && (
                <MenuButton to="/loading">Loading</MenuButton>
            )}
            <MenuButton to="/about" icon={<InformationIcon />}>{t("interface.about")}</MenuButton>
        </nav>
    )
}

const MenuButton = ({ children, to, icon }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const match = (location.pathname === to);

    const handleClick = () => {
        navigate(to);
    }
    
    return (
        <button className={match ? "menu-button active" : "menu-button"}
            onClick={() => handleClick()}
        >
            {icon && icon}
            {children}
        </button>
    )
}