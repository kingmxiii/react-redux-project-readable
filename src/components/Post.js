import React from 'react'
import { Link } from 'react-router-dom'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import Vote from './Vote'
import { LinkContainer } from 'react-router-bootstrap'
import Moment from 'react-moment'

export default function Post(props){
  const { post, comments, deletePost } = props
  return (
    <div className="post-item">
      <div className="post-handle row">
        <div className="post-menu pull-right">
          <DropdownButton bsStyle="default" title="..." noCaret id="dropdown-no-caret">
            <LinkContainer to={`/${post.category}/${post.id}`} >
              <MenuItem eventKey="1">View</MenuItem>
            </LinkContainer>
            <LinkContainer to={`/post/action/edit/${post.id}`}>
              <MenuItem eventKey="2">Edit</MenuItem>
            </LinkContainer>
            <MenuItem eventKey="3">  <span onClick={ () =>{ deletePost(post.id) }} >Delete</span></MenuItem>
          </DropdownButton>
        </div>
      </div>
      <div className="post-header row">
        <div className="post-title">
          <Link to={`/${post.category}/${post.id}`}>
            <h4>{post.title}</h4>
          </Link>
          <span className="post-author">By: {post.author}</span>
          <span className="post-time">
            <Moment unix format="MMMM DD hh:mm a">
              {post.timestamp}
            </Moment>
          </span>
        </div>

      </div>
      <div className="row post-tools">
        <div className="post-actions pull-left">
          <Vote postId={post.id} />
        </div>
        <div className="post-stats pull-left">
            <span>Score: {post.voteScore} </span>
            <span>Comments: { comments } </span>
        </div>

      </div>
    </div>
  )
}
