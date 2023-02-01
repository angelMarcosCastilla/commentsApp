import { commentsApp } from '../json/commentsdb';
import { CommentsWithChildren } from '../types/comments';
import { getParentsCommentUtil } from '../utils/commetsUtils';

export const getComments = async (): Promise<CommentsWithChildren[]> => {
	return await new Promise(resolve =>
		setTimeout(() => {
			const parentComents = getParentsCommentUtil(commentsApp);
			resolve(parentComents);
		}, 3000),
	);
};
