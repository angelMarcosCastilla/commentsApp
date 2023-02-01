import React, { useEffect, useState } from 'react'
import { getComments } from '../services/comments'
import {  CommentsWithChildren } from '../types/comments'
import CommentCards from './CommentCards'

export default function ContainerComments():JSX.Element {
  const [comments, setComments] = useState<CommentsWithChildren[]>([])

  useEffect(() => {
    getComments()
    .then(setComments)
    .catch(console.error)
  }, [])

  return (
    <div className='container'>
      {
        comments.map((comment) => {
          return (
            <CommentCards key={comment.id} comment={comment}/>
          )
        })
      }
    </div>
  )
}
