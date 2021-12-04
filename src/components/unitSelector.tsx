import { useObservable } from '@ngneat/use-observable';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ToggleSwitch } from '.';
import { settingsQuery, settingsService } from '../data/stores/settings';

export const UnitSelector = () => {
    const [t] = useTranslation();
    const [settings] = useObservable(settingsQuery.state$);

    return (
        <fieldset>
            <legend>{t("units.label")}</legend>
            <div className="settings-row">
                <label>{t('settingsPanel.weightUnit')}</label>
                <ToggleSwitch name="displayKilos" checked={settings.displayInKilos} onChange={settingsService.toggleKiloDisplay} />
            </div>
            <div className="settings-row">
                <label>{t('settingsPanel.axleDistanceUnit')}</label>
                <ToggleSwitch name="displayInMillimetres" checked={settings.displayInMillimetres} onChange={settingsService.toggleMillimetreDisplay} />
            </div>
        </fieldset>
    )
}