import React from 'react'
import CommentStats from './CommentStats'

export default function Comment(props){
  const { comment } = props
  return (
    <div className="comemnt-item">
      <span className="comment-author">{comment.author}: </span>
      <span className="comment-body">{comment.body}</span>
      <CommentStats comment={comment} />
    </div>
  )
}
