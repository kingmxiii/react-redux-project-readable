import React from 'react'
import { Link } from 'react-router-dom'

export default function Post(props){
  const { post, comments } = props
  return (
    <div className="post-item">
      <div className="post-header">
        <Link to={`/${post.category}/${post.id}`}><h3>{post.title}</h3></Link>
        <span>{post.author}</span>
      </div>
      <div className="post-tools">
        <div className="post-stats">
            <span>Scores: {post.voteScore} </span>
            <span>Comments: { comments } </span>
        </div>
        <div className="post-actions">
        </div>
      </div>
    </div>
  )
}
