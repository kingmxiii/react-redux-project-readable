import React from 'react'
import { Link } from 'react-router-dom'
import Vote from './Vote'
import PostMenu from './PostMenu'
import Moment from 'react-moment'
export default function Post(props){
  const { post, comments, deletePost } = props
  return (
    <div className="post-item">
      <div className="post-handle row">
        <PostMenu post={post} deletePost={deletePost}/>
      </div>
      <div className="post-header row">
        <div className="post-title">
          <Link to={`/${post.category}/${post.id}`}>
            <h4>{post.title}</h4>
          </Link>
          <span className="post-author">By: {post.author}</span>
          <span className="post-time">
            <Moment unix format="MMMM DD hh:mm a">
              {post.timestamp}
            </Moment>
          </span>
        </div>

      </div>
      <div className="row post-tools">
        <div className="post-actions pull-left">
          <Vote postId={post.id} />
        </div>
        <div className="post-stats pull-left">
            <span>Score: {post.voteScore} </span>
            <span>Comments: { comments } </span>
        </div>

      </div>
    </div>
  )
}
