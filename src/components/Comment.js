import React from 'react'
import CommentStats from './CommentStats'

export default function Comment(props){
  const { comment } = props
  return (
    <div className="comment-item">
      <div className="comment-body">
        <span className="comment-author">{comment.author}: </span>
        <span className="comment-body">{comment.body}</span>
      </div>
      <CommentStats comment={comment} />
    </div>
  )
}
