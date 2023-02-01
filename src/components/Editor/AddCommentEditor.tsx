import React, { useState } from 'react';
import Avatar from '../Avatar';
import Button from '../Button';
import TextArea from '../TextArea';

interface Props {
	handleSubmit: (commentText: string, resetValue: Function) => void;
	loading?: boolean;
}
export const AddCommentEditor: React.FC<Props> = ({ handleSubmit, loading }) => {
	const [value, setValue] = useState<string>('');

	const resetValue = (): void => {
		setValue('');
	};

	return (
		<div className='editorContainer'>
			<Avatar
				src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
				name=''
			></Avatar>
			<TextArea
				value={value}
				onChange={e => {
					setValue(e.target.value);
				}}
			></TextArea>
			<Button
				disabled={value.length === 0 || loading === true}
				size='large'
				onClick={() => {
					handleSubmit(value, resetValue);
				}}
			>
				{loading === true ? 'Loading...' : 'Add Comment'}
			</Button>
		</div>
	);
};
