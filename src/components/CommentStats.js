import React, { Component } from 'react'
import Vote from './Vote'
import { connect } from 'react-redux'
import { openModal, deleteComment } from '../actions'
import Moment from 'react-moment'
import 'moment-timezone';
import Pencil from 'react-icons/lib/fa/pencil'
import Trash from 'react-icons/lib/fa/trash'
import Dashboard from 'react-icons/lib/fa/dashboard'

 class CommentStats extends Component {

  render(){
    const { comment, openModal, deleteComment } = this.props
    const commentDate = new Date(comment.timestamp)
    return(
      <div className="row comment-tools">
        <div className="comment-actions pull-left">
          <span className="comment-action pull-left"
            onClick={(e) => {
              e.preventDefault()
              openModal('edit', comment.id, comment.parentId ) }}
          >
            <Pencil /> Edit
          </span>
          <span className="comment-action pull-left"
             onClick={ (e) => {
               e.preventDefault()
               deleteComment(comment.id, comment.parentId)
             }}
          >
          <Trash /> Delete
         </span>
          <span className="pull-left">
            <Vote id={comment.id} comp="comment" />
          </span>
        </div>
        <div className="comment-stats pull-left">
            <span><Dashboard /> Score: {comment.voteScore}</span>
            <span>Posted:
              <Moment tz="America/New_York" format="llll">
                { commentDate.toUTCString() }
              </Moment>
              </span>
          </div>
        </div>
      )
  }
}

export default connect(null, { openModal, deleteComment })(CommentStats)
