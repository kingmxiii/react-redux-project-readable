import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, fetchComments } from '../actions'
import _ from 'lodash'

class PostDetails extends Component {
  componentDidMount() {
    const { post_id } = this.props.match.params
    this.props.fetchPost(post_id)
    this.props.fetchComments(post_id)
  }
  render(){
    const { post, postComments } = this.props
    if(!post) {
      return <div>Loading...</div>;
    }
    return(

      <div className="post-content">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-toolbar">
          {post.vote}
        </div>
        <div className="post-body">
          <p className="post-body-text">{post.body}</p>
        </div>
        <div className="post-info">
          <span className="post-author">{post.author}</span>
          <span className="post-date">{post.date}</span>
        </div>
        <div className="post-comments">
          <h3>Comments</h3>
          {_.map(postComments,(comment) => {
            return (
              <div key={comment.id} className="comemnt-item">
                <p className="comment-body">{comment.body}</p>
                <span className="comment-author">{comment.author}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps({posts, comments }, ownProps) {
  const { post_id } = ownProps.match.params
  return {
          post: posts[post_id],
          postComments : comments[post_id]
    }
}

export default connect(mapStateToProps, { fetchPost, fetchComments })(PostDetails)
