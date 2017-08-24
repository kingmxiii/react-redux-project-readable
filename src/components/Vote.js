import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postVote } from '../actions'
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-up'
import ThumbsDownIcon from 'react-icons/lib/fa/thumbs-down'

class Vote extends Component {
  render(){
    const { postId, postVote } = this.props
    return (
      <div className="vote-box">
        <span className="vote-button" onClick={() => {postVote(postId,"upVote")}}><ThumbsUpIcon /></span>
        <span className="vote-butoon" onClick={() => {postVote(postId,"downVote")}}><ThumbsDownIcon /></span>
      </div>
    )
  }
}

export default connect(null,{postVote})(Vote)
