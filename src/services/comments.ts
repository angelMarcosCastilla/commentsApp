import { commentsApp } from '../json/commentsdb';
import { CommentsWithChildren } from '../types/comments';

export const getComments = async (): Promise<CommentsWithChildren[]> => {
	return await new Promise(resolve =>
		setTimeout(() => {
			resolve(commentsApp);
		}, 3000),
	);
};
