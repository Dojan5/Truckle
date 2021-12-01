import React from 'react';

interface IToggleSwitch {
	name: string;
	checked: boolean;
	onChange: Function;
	disabled?: boolean;
}

export const ToggleSwitch: React.FC<IToggleSwitch> = (props) => {
	const { name, checked, onChange, disabled } = props;

	return (
		<div className="toggle-switch">
			<input 
				id={name}
				className="toggle-switch-input" 
				type="checkbox"
				name={name}
				checked={checked}	
				onChange={(evt) => onChange(evt)}
				disabled={disabled}
			/>
			<label
				className="toggle-switch-label"
				htmlFor={name}
			>
				<span className="toggle-switch-button" />
			</label>
		</div>
	)
}