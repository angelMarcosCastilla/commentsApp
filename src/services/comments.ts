import { commentsApp } from '../json/commentsdb';
import { CommentsWithChildren, Comment } from '../types/comments';

export const getComments = async (): Promise<CommentsWithChildren[]> => {
	return await new Promise(resolve =>
		setTimeout(() => {
			resolve(commentsApp);
		}, 3000),
	);
};


export const addComment = async (comment: Comment ): Promise<Comment> => {
	return await new Promise(resolve =>
		setTimeout(() => {
			commentsApp.push(comment);
			resolve(comment);
		}, 3000),
	);

};