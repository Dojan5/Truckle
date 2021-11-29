import React from 'react';

export const ToggleSwitch = ({toggleState, clickHandler}) => {
    return (
        <label onClick={() => clickHandler()} className="toggle-switch">
            <input type="checkbox" checked={toggleState} />
            <span className="toggle-switch-slider" />
        </label>
    )
}