import React from 'react';
import { Comment } from '../types/comments';
import Avatar from './Avatar';
import Score from './Score';

interface Props {
	comment: Comment;
}

const CommentCards: React.FC<Props> = ({ comment }) => {
	return (
		<article className='comments-card'>
			<div className='comments-card__aside'>
				<Score initialScore={comment.score}></Score>
			</div>
			<div>
				<header className='comments-card__header'>
					<div className='coments-card__headerDetails'>
						<Avatar src={comment.user.avatar} name={comment.user.userName} size='small'></Avatar>
						<h3>{comment.user.userName}</h3>
						<span>{comment.timestamp}</span>
					</div>
					<div className='coments-card__actions'>reply</div>
				</header>
				<div className='comments-card__body'>
					<p>{comment.comments}</p>
				</div>
			</div>
		</article>
	);
};

export default CommentCards;
