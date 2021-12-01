import React from 'react';
import { useTranslation } from 'react-i18next';

export const UnitSelector = () => {
    const [t] = useTranslation();

    return (
        <fieldset>
            <legend>{t("units.label")}</legend>
        </fieldset>
    )
}