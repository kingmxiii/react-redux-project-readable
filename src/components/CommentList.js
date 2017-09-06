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
        <div className="comments-header">
          <div className="comments-title">
            <h4>Comments</h4>
          </div>
          <Menubar
            entity="comments"
            onNewClick={openModal}
            parentId={postId}
          />
        </div>
        {_.map(postComments,(comment) => {
          return (
            <Comment key={comment.id} comment={comment} />
          )
        })}
        <Modal
          className='comment-modal'
          overlayClassName='overlay'
          isOpen={appSettings.commentModal.isOpen}
          onRequestClose={closeModal}
          contentLabel='New Comment'
        >
          <CommentForm />
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
