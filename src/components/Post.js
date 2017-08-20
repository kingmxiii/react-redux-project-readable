import React from 'react'

export default function Post(props){
  const { post } = props
  return (
    <div className="post-item">
      <div className="post-header">
        <h3>{post.title}</h3>
        <span>{post.author}</span>
      </div>
      <div className="post-tools">
        <div className="post-stats">
            <span>{post.voteScore}</span>
        </div>
        <div className="post-actions">
        </div>
      </div>
    </div>
  )
}
