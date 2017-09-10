import React from 'react'
import Vote from './Vote'
import Dashboard from 'react-icons/lib/fa/dashboard'
import Comments from 'react-icons/lib/fa/comments'

//Render post stats 
export default function PostStats(props){
  const { post, comments } = props
  return(
    <div className="row post-tools">
      <div className="post-actions pull-left">
        <Vote id={post.id} comp="post" />
      </div>
      <div className="post-stats pull-left">
          <div className="pull-left"><span className="post-stats-icon"><Dashboard/></span> Score: {post.voteScore} </div>
          <div className="pull-left"><span className="post-stats-icon"><Comments/></span> Comments: { comments } </div>
      </div>
    </div>
  )
}
