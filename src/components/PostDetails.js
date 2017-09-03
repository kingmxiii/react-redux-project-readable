import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, fetchComments, deletePost } from '../actions'
import  Moment from 'react-moment'
import 'moment-timezone';
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
    const postTime = new Date(post.timestamp);
    return(

      <div className="post-details-content">
        <div className="post-details-handle row">
          <PostMenu post={post} deletePost={deletePost} view="detail" />
        </div>
        <div className="post-details-header row">
          <h2 className="post-details-title">{post.title}</h2>
          <span className="post-time">
            <Moment tz="America/New_York">{postTime.toUTCString()}</Moment>
          </span>
        </div>
        <div className="post-details-toolbar">
          <Vote postId={post.id}/>
        </div>
        <div className="post-details-body row">
          <p className="post-body-text">{post.body}</p>
        </div>
        <div className="post-details-info">
          <span className="post-author">{post.author}</span>
          <span className="post-date">{post.date}</span>
        </div>
        <div className="post-details-comments">
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
