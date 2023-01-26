import React from 'react';

interface Props {
	variant?: 'primary' | 'secondary' | 'text';
	icon?: React.ReactNode;
	size?: 'small' | 'medium' | 'large';
	children?: React.ReactNode;
	onClick?: () => void;
	disabled?: boolean;
}

const Button: React.FC<Props> = ({ children, variant = 'primary', ...rest }) => {
	const isDisabled = Boolean(rest.disabled);

	const className = `btn btn__${variant}`;
	return (
		<button className={className} disabled={isDisabled} {...rest}>
			{children}
		</button>
	);
};

export default Button;
