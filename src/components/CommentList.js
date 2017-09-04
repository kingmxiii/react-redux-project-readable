import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Comment from './Comment'
import Menubar from './MenuBar'

class CommentList extends Component{
  render() {
    const { postComments } = this.props
    return(
      <div className="post-details-comments">
        <div className="comments-header">
          <div className="comments-title">
            <h4>Comments</h4>
          </div>
          <Menubar entity="comments"/>
        </div>
        {_.map(postComments,(comment) => {
          return (
            <Comment key={comment.id} comment={comment} />
          )
        })}
      </div>
    )
  }
}

function mapStateToProps({comments, appSettings}, ownProps){
  return {
    postComments: _.mapKeys(_.orderBy(comments[ownProps.postId], appSettings.comments.sortKey, appSettings.comments.sortOrder), 'id')
  }
}

export default connect(mapStateToProps)(CommentList)
