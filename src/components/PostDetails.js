import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, fetchComments, deletePost } from '../actions'
import _ from 'lodash'
import Vote from './Vote'
import PostMenu from './PostMenu'

class PostDetails extends Component {
  componentDidMount() {
    const { post_id } = this.props.match.params
    this.props.fetchPost(post_id)
    this.props.fetchComments(post_id)
  }
  render(){
    const { post, postComments, deletePost } = this.props
    if(!post) {
      return <div>Loading...</div>;
    }
    return(

      <div className="post-content">
        <div className="post-handle">
          <PostMenu post={post} deletePost={deletePost} view="detail" />
        </div>
        <h2 className="post-title">{post.title}</h2>
        <div className="post-toolbar">
          <Vote postId={post.id}/>
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

export default connect(mapStateToProps, { fetchPost, fetchComments, deletePost })(PostDetails)
