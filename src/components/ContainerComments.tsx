import React, { Children, useEffect, useState } from 'react';
import { getComments } from '../services/comments';
import { CommentsWithChildren } from '../types/comments';
import { getParentsCommentUtil } from '../utils/commetsUtils';
import CommentCards from './CommentCards';
import { AddCommentEditor } from './Editor/AddCommentEditor';

export default function ContainerComments(): JSX.Element {
	const [comments, setComments] = useState<CommentsWithChildren[]>([]);

	useEffect(() => {
		getComments()
			.then(res => {
				const parentComents = getParentsCommentUtil(res);
				setComments(parentComents);
			})
			.catch(console.error);
	}, []);

	const handleSubmit = (commentText: string, resetValue:Function): void => {
		const newComments:CommentsWithChildren = {
			id: Date.now(),
			user:{
				id: 1,
				name: 'John Doe',
				userName:"name",
				avatar: 'https://avatars.steamstatic.com/c62774de722209685056b76d9ccb1add485d1ca5_full.jpg'
			},
			timestamp: new Date().toISOString(),
			comments:commentText,
			score: 12,
			parentId: null,
			children: []
		}
		setComments([...comments, newComments])
		resetValue()
	};

	return (
		<div className='container'>
			{comments.map(comment => {
				return <CommentCards key={comment.id} comment={comment} />;
			})}
			<AddCommentEditor handleSubmit={handleSubmit}></AddCommentEditor>
		</div>
	);
}
