import React from 'react'
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-up'
import ThumbsDownIcon from 'react-icons/lib/fa/thumbs-down'

export default function Vote(props) {
  return (
    <div className="vote-box">
      <span className="vote-button"><ThumbsUpIcon /></span>
      <span className="vote-butoon"><ThumbsDownIcon /></span>
    </div>
  )
}
