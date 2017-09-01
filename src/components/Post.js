import React from 'react'
import { Link } from 'react-router-dom'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import Vote from './Vote'

export default function Post(props){
  const { post, comments, deletePost } = props
  return (
    <div className="post-item">
      <div className="row post-header">
        <div className="post-title col-md-10 col-sm-10 col-xs-10">
          <Link to={`/${post.category}/${post.id}`}><h3>{post.title}</h3></Link>
          <span>{post.author}</span>
        </div>
        <div className="post-menu col-md-2 col-sm-2 col-xs-2">
          <DropdownButton bsStyle="default" title="..." noCaret id="dropdown-no-caret">
            <MenuItem eventKey="1"><Link to={`/${post.category}/${post.id}`}>View</Link></MenuItem>
            <MenuItem eventKey="2"><Link to={`/post/action/edit/${post.id}`}>Edit</Link></MenuItem>
            <MenuItem eventKey="3">  <span onClick={ () =>{ deletePost(post.id) }} >Delete</span></MenuItem>
          </DropdownButton>
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
