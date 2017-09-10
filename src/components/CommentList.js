import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import _ from 'lodash'
import Comment from './Comment'
import Menubar from './MenuBar'
import CommentForm from './CommentForm'
import { openModal, closeModal } from '../actions'

class CommentList extends Component{
  render() {
    const { postComments, postId ,appSettings, openModal, closeModal } = this.props
    return(
      <div className="post-details-comments">
        <div className="comments-header row">
          <div className="comments-title pull-left">
            <h4>Comments</h4>
          </div>
          <div className="comments-list-bar pull-right">
            <Menubar
              entity="comments"
              onNewClick={openModal}
              parentId={postId}
            />
          </div>
        </div>
        <div className="comment-list row">
          {_.map(postComments,(comment) => {
            return (
              <Comment
                key={comment.id}
                comment={comment}
              />
            )
          })}
        </div>
        <Modal
          className='comment-modal modal-content'
          overlayClassName='overlay'
          isOpen={appSettings.commentModal.isOpen}
          onRequestClose={closeModal}
          contentLabel='New Comment'
        >
          <div className="">
            <div className="modal-header">
              <button type="button" className="close" onClick={closeModal}>&times;</button>
              <h4 className="modal-title">Comment Form</h4>
            </div>
            <div className="modal-body">
              <CommentForm />
            </div>
          </div>
        </Modal>

      </div>
    )
  }
}

function mapStateToProps({comments, appSettings}, ownProps){
  return {
    postComments: _.mapKeys(_.orderBy(comments[ownProps.postId], appSettings.comments.sortKey, appSettings.comments.sortOrder), 'id'),
    appSettings
  }
}

export default connect(mapStateToProps, { openModal, closeModal })(CommentList)
