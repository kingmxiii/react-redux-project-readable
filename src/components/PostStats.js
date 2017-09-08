import React from 'react'
import Vote from './Vote'

export default function PostStats(props){
  const { post, comments } = props
  return(
    <div className="row post-tools">
      <div className="post-actions pull-left">
        <Vote id={post.id} comp="post" />
      </div>
      <div className="post-stats pull-left">
          <span>Score: {post.voteScore} </span>
          <span>Comments: { comments } </span>
      </div>
    </div>
  )
}
