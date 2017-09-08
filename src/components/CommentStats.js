import React, { Component } from 'react'
import Vote from './Vote'
import { connect } from 'react-redux'
import { openModal, deleteComment } from '../actions'

 class CommentStats extends Component {

  render(){
    const { comment, openModal, deleteComment } = this.props
    const commentDate = new Date(comment.timestamp)
    return(
      <div className="row comment-tools">
        <div className="comment-actions pull-left">
          <span className="pull-left"
            onClick={(e) => {
              e.preventDefault()
              openModal('edit', comment.id, comment.parentId ) }}
          >
            Edit
          </span>
          <span className="pull-left"
             onClick={ (e) => {
               e.preventDefault()
               deleteComment(comment.id, comment.parentId)
             }}
          >
          Delete
         </span>
          <span className="pull-left">
            <Vote id={comment.id} comp="comment" />
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

export default connect(null, { openModal, deleteComment })(CommentStats)
