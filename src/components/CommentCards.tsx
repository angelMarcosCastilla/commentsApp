import React, { memo } from 'react';
import { CommentsWithChildren as Comment } from '../types/comments';
import Avatar from './Avatar';
import Button from './Button';
import Score from './Score';
import TimeStamp from './TimeStamp';

interface Props {
	comment: Comment;
}

const CommentCards: React.FC<Props> = (({ comment }) => {
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
							<Button variant='text'>
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
						return <CommentCards key={child.id} comment={child} />;
					})}
				{/* <ReplyEditor/> */}
			</div>
		</>
	);
})

export default memo(CommentCards);
