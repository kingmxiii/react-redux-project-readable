import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'

class PostDetails extends Component {
  componentDidMount() {
    const { post_id } = this.props.match.params
    this.props.fetchPost(post_id)
  }
  render(){
    const { post } = this.props
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
      </div>
    )
  }
}

function mapStateToProps({posts}, ownProps) {
  return { post: posts[ownProps.match.params.post_id] }
}

export default connect(mapStateToProps, {fetchPost})(PostDetails)
