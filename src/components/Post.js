import React from 'react'
import { Link } from 'react-router-dom'
import PostStats from './PostStats'
import PostMenu from './PostMenu'
import Moment from 'react-moment'

//Render a post item 
export default function Post(props){
  const { post, comments, deletePost } = props
  const postTime = new Date(post.timestamp)
  return (
    <div className="post-item">
      <div className="post-handle row">
        <PostMenu post={post} deletePost={deletePost} view="list"/>
      </div>
      <div className="post-header row">
        <div className="post-title">
          <Link to={`/${post.category}/${post.id}`}>
            <h4>{post.title}</h4>
          </Link>
          <span className="post-author">By: {post.author}</span>
          <span className="post-time">
            <Moment format="MMMM DD hh:mm a">
              {postTime.toUTCString()}
            </Moment>
          </span>
        </div>

      </div>
      <PostStats post={post} comments={comments}/>
    </div>
  )
}
