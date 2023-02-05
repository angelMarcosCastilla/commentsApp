import React from 'react';

interface Props {
	message: string;
	color?: string;
	children?: React.ReactNode;
}

const Toast: React.FC<Props> = ({ message, color,children, ...rest}) => {
	return (
		<div
			style={{
				['--colorToast' as string]: color,
			}}
			className='toastContainer'
		>
			{message}
			{children}
		</div>
	);
};

export default Toast;
