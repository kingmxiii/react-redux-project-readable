import React from 'react'
import Vote from './Vote'

export default function CommentStats(props){
  const { comment } = props
  const commentDate = new Date(comment.timestamp)
  return(
    <div className="row comment-tools">
      <div className="comment-actions pull-left">
        <span className="pull-left">Edit</span>
        <span className="pull-left">
          <Vote postId={comment.id} />
        </span>
      </div>
      <div className="comment-stats pull-left">
          <span>Score: {comment.voteScore} </span>
          <span>Posted: { commentDate.toUTCString() } </span>
      </div>
    </div>
  )
}
