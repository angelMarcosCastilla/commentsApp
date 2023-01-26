import React from 'react';

interface Props {
	height?: string;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	value?: string;
}

const TextArea: React.FC<Props> = ({ height = '100px', onChange, value }) => {
	return (
		<textarea
			value={value}
			onChange={onChange}
			className='textarea'
			style={{
				height,
			}}
		></textarea>
	);
};

export default TextArea;
