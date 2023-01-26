import React, { useMemo } from 'react';

interface Props {
	variant?: 'primary' | 'secondary' | 'text';
	color?: 'error' | 'neutro' | 'primary';
	icon?: React.ReactNode;
	size?: 'small' | 'medium' | 'large';
	children?: React.ReactNode;
	onClick?: () => void;
	disabled?: boolean;
}

const getVariableCss = (color: string): string => {
	const variables: Record<string, string> = {
		primary: '--primary-color',
		secondary: '--color-secondary',
		text: '--color-text',
		error: '--soft-red',
		neutro: '--grayish-blue',
	};

	return getComputedStyle(document.documentElement).getPropertyValue(variables[color]);
};

const Button: React.FC<Props> = ({ children, variant = 'primary', color = 'primary', ...rest }) => {
	const isDisabled = Boolean(rest.disabled);

	const className = `btn btn__${variant}`;
	const btnColor = useMemo(() => getVariableCss(color), [color]);
	
	return (
		<button style={{ '--color': btnColor }} className={className} disabled={isDisabled} {...rest}>
			{children}
		</button>
	);
};

export default Button;
