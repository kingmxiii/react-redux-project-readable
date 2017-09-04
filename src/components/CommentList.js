import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Comment from './Comment'

class CommentList extends Component{
  render() {
    const { postComments } = this.props
    return(
      <div className="post-details-comments">
        <h4>Comments</h4>
        {_.map(postComments,(comment) => {
          return (
            <Comment key={comment.id} comment={comment} />
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
