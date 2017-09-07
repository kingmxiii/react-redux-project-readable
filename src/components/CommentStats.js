import React, { Component } from 'react'
import Vote from './Vote'
import { connect } from 'react-redux'
import { openModal } from '../actions'

 class CommentStats extends Component {

  render(){
    const { comment } = this. props
    const commentDate = new Date(comment.timestamp)
    return(
      <div className="row comment-tools">
        <div className="comment-actions pull-left">
          <span className="pull-left">Edit</span>
          <span className="pull-left">
            <Vote postId={comment.id} />
          </span>
        </div>
        <div className="comment-stats pull-left">
            <span>Score: {comment.voteScore} </span>
            <span>Posted: { commentDate.toUTCString() } </span>
          </div>
        </div>
      )
  }
}

export default connect(null, { openModal })(CommentStats)
