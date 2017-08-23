import React, { Component } from 'react'

export default class PostDetails extends Component {
  render(){
    const { post } = this.props
    return(
      <div class="post-content">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-toolbar">

        </div>
        <div className="post-body">
          <p className="post-body-text">{post.body}</p>
        </div>
        <div className="post-info">
          <span className="post-author">{post.author}</span>
          <span className="post-date">{post.date}</span>
        </div>
      </div>
    )
  }
}
