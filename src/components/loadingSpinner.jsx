import React from 'react';
import { useTranslation } from 'react-i18next';

export const LoadingSpinner = () => {
    const [t] = useTranslation();
    return (
        <div className="loading-spinner">
            <div className="spinner">
                <span>
                    <span>
                        <span>
                            <span />
                        </span>
                    </span>
                </span>

            </div>
            <span className="spinner-text">
                {t("interface.loading")}
            </span>
        </div>
    )
}