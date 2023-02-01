import { commentsApp } from '../json/commentsdb';
import {  Comment } from '../types/comments';

export const getComments = async (): Promise<Comment[]> => {
	return await new Promise(resolve =>
		setTimeout(() => {
			resolve(commentsApp);
		}, 3000),
	);
};

export const addComment = async (comment: Comment ): Promise<Comment> => {
	return await new Promise(resolve =>
		setTimeout(() => {
			resolve(comment);
		}, 3000),
	);

};