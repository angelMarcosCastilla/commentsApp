import { Comment, CommentsWithChildren } from "../types/comments"

export const getParentsCommentUtil = (comments: Comment[]) : CommentsWithChildren[] => {
  const treeComments = getTreeArbolFoldersUtil(comments)
  return treeComments
} 

function getTreeArbolFoldersUtil(comments:Comment[], parent:number | null = null) : CommentsWithChildren[]{
  const tree:CommentsWithChildren[] = comments.filter(comment => comment.parentId === parent)
  tree.forEach(comment => {
    comment.children = getTreeArbolFoldersUtil(comments, comment.id)
  })
  return tree
}
