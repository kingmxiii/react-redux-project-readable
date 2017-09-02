import React from 'react'
import { Link } from 'react-router-dom'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import Vote from './Vote'
import { LinkContainer } from 'react-router-bootstrap'

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
          <span>By: {post.author}</span>
        </div>

      </div>
      <div className="row post-tools">
        <div className="post-stats">
            <span>Scores: {post.voteScore} </span>
            <span>Comments: { comments } </span>
        </div>
        <div className="post-actions">
          <Vote postId={post.id} />
        </div>
      </div>
    </div>
  )
}
