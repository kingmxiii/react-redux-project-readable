import React from 'react'
import { connect } from 'react-redux'
import { postVote, commentVote } from '../actions'
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-up'
import ThumbsDownIcon from 'react-icons/lib/fa/thumbs-down'

//Render vote component for post and comment
const Vote = (props) => {
  const vote = (option) => {
    const { id, postVote, commentVote, comp } = props
    if(comp === 'post'){
      postVote(id,option)
    }
    else{
      commentVote(id,option)
    }
  }

  return (
    <div className="vote-box">
      <span className="vote-button text-success" onClick={() => { vote("upVote")}}><ThumbsUpIcon /></span>
      <span className="vote-button text-danger" onClick={() => { vote("downVote")}}><ThumbsDownIcon /></span>
    </div>
  )
}

export default connect(null,{postVote, commentVote})(Vote)
