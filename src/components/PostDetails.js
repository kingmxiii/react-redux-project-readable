import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, fetchComments, deletePost } from '../actions'
import  Moment from 'react-moment'
import 'moment-timezone';
import _ from 'lodash'
import PostStats from './PostStats'
import PostMenu from './PostMenu'
import CommentList from './CommentList'

//Render detail view for a post
class PostDetails extends Component {
  componentDidMount() {
    const { post_id } = this.props.match.params
    /*Fetch Post and Post Comments in case the post detail view
     Is accessed directly from the address bar */ 
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
            Posted on:
            <Moment tz="America/New_York" format="llll">{postTime.toUTCString()}</Moment>
          </span>
          <span className="post-author">
            By: {post.author}
          </span>
        </div>
        <div className="post-details-body row">
          <p className="post-body-text">{post.body}</p>
        </div>
        <PostStats post={post} comments={_.size(postComments)}/>
        <hr />
        <CommentList postId={post.id} />
      </div>
    )
  }
}

function mapStateToProps({ posts, comments }, ownProps) {
  const { post_id } = ownProps.match.params
  return {
          post: posts[post_id],
          postComments: comments[post_id]
    }
}

export default connect(mapStateToProps, { fetchPost, fetchComments, deletePost })(PostDetails)
