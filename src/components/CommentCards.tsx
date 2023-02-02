import React, { memo, useState } from 'react';
import { replyComments } from '../services/comments';
import { CommentsWithChildren as Comment } from '../types/comments';
import Avatar from './Avatar';
import Button from './Button';
import { AddCommentEditor } from './Editor/AddCommentEditor';
import Score from './Score';
import TimeStamp from './TimeStamp';

interface Props {
	comment: Comment;
	setComments: Function;
}

const CommentCards: React.FC<Props> = ({ comment, setComments }) => {
	const [showReplyEditor, setShowReplyEditor] = React.useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const handleReply = (commentText: string, resetValue: Function): void => {
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
			parentId: comment.id,
		};

		replyComments(newComments)
			.then(res => {
				setComments((prevState:Comment[]) => [...prevState, res]);
				setLoading(false);
				resetValue();
			})
			.catch(console.error);
	};

	return (
		<>
			<article className='comments-card'>
				<div className='comments-card__aside'>
					<Score initialScore={comment.score}></Score>
				</div>
				<div>
					<header className='comments-card__header'>
						<div className='coments-card__headerDetails'>
							<Avatar src={comment.user.avatar} name={comment.user.userName} size='small'></Avatar>
							<h3>{comment.user.userName}</h3>
							<TimeStamp timestamp={comment.timestamp}></TimeStamp>
						</div>
						<div className='coments-card__actions'>
							<Button
								variant='text'
								onClick={() => {
									setShowReplyEditor(prevState => !prevState);
								}}
							>
								<img src='./icon-reply.svg' alt='icon reply' /> Reply
							</Button>
						</div>
					</header>
					<div className='comments-card__body'>
						<p>{comment.comments}</p>
					</div>
				</div>
			</article>
			<div className='commentLine'>
				{comment?.children != null &&
					comment.children.map(child => {
						return <CommentCards key={child.id} comment={child} setComments={setComments} />;
					})}
			</div>
			{showReplyEditor && <AddCommentEditor handleSubmit={handleReply} textButton='reply' loading={loading} />}
		</>
	);
};

export default memo(CommentCards);
