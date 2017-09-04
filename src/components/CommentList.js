import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

class CommentList extends Component{
  render() {
    const { postComments } = this.props
    return(
      <div className="post-details-comments">
        <h4>Comments</h4>
        {_.map(postComments,(comment) => {
          return (
            <div key={comment.id} className="comemnt-item">
              <span className="comment-author">{comment.author}: </span>
              <span className="comment-body">{comment.body}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps({comments}, ownProps){
  return {
    postComments: comments[ownProps.postId]
  }
}

export default connect(mapStateToProps)(CommentList)
