import React from 'react'
import {commentsApp} from "../json/commentsdb"
import CommentCards from './CommentCards'
export default function ContainerComments():JSX.Element {
  return (
    <div className='container'>
      {
        commentsApp.map((comment) => {
          return (
            <CommentCards key={comment.id} comment={comment}/>
          )
        })
      }
    </div>
  )
}
