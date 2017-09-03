
import React from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
export default function PostMenu(props){
  const { post, deletePost } = props
  return(
    <div className="post-menu pull-right">
      <DropdownButton bsStyle="default" pullRight title="..." noCaret id="dropdown-no-caret">
        <LinkContainer to={`/${post.category}/${post.id}`} >
          <MenuItem eventKey="1">View</MenuItem>
        </LinkContainer>
        <LinkContainer to={`/post/action/edit/${post.id}`}>
          <MenuItem eventKey="2">Edit</MenuItem>
        </LinkContainer>
        <MenuItem eventKey="3">  <span onClick={ () =>{ deletePost(post.id) }} >Delete</span></MenuItem>
      </DropdownButton>
    </div>
  )
}
