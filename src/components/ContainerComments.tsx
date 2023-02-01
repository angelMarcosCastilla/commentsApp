import {  useMemo, useState } from 'react';
import useGetComments from '../hooks/useGetComments';
import { addComment } from '../services/comments';
import { Comment, CommentsWithChildren } from '../types/comments';
import { getParentsCommentUtil } from '../utils/commetsUtils';
import CommentCards from './CommentCards';
import { AddCommentEditor } from './Editor/AddCommentEditor';

export default function ContainerComments(): JSX.Element {
	const [loading, setLoading] = useState<boolean>(false);
	const {comments, setComments, loading: loadingComments} = useGetComments();

	const commentsTree: CommentsWithChildren[] = useMemo(() => {
		return getParentsCommentUtil(comments);
	}, [comments]);

	const handleSubmit = (commentText: string, resetValue: Function): void => {
		setLoading(true);
		const newComments: Comment = {
			id: Date.now(),
			user: {
				id: 1,
				name: 'John Doe',
				userName: 'name',
				avatar: 'https://avatars.steamstatic.com/c62774de722209685056b76d9ccb1add485d1ca5_full.jpg',
			},
			timestamp: new Date().toISOString(),
			comments: commentText,
			score: 12,
			parentId: null,
		};

		addComment(newComments)
			.then(res => {
				setComments([...comments, res]);
				setLoading(false);
				resetValue();
			})
			.catch(console.error);
	};
	console.log('commentsTree', comments)
	return (
		<div className='container'>
			{
				loadingComments ? <div>Loading...</div> : null
			}
			{ commentsTree.map(comment => {
				return <CommentCards key={comment.id} comment={comment} />;
			})}

			<AddCommentEditor handleSubmit={handleSubmit} loading={loading}></AddCommentEditor>
		</div>
	);
}
