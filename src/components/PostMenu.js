
import React from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Bars from 'react-icons/lib/fa/bars'
import Eye from 'react-icons/lib/fa/eye'
import Pencil from 'react-icons/lib/fa/pencil'
import Trash from 'react-icons/lib/fa/trash'

//Render post menu
export default function PostMenu(props){
  const { post, deletePost, view } = props
  return(
    <div className="post-menu pull-right">
      <DropdownButton bsStyle="default" pullRight title={<Bars/>} noCaret id="dropdown-no-caret">
        { view === 'list' &&
          <LinkContainer to={`/${post.category}/${post.id}`} >
            <MenuItem eventKey="1"><Eye /> View</MenuItem>
          </LinkContainer>
        }
        <LinkContainer to={`/post/action/edit/${post.id}`}>
          <MenuItem eventKey="2"><Pencil /> Edit</MenuItem>
        </LinkContainer>
        <MenuItem eventKey="3">  <span onClick={ () =>{ deletePost(post.id) }} ><Trash/> Delete</span></MenuItem>
      </DropdownButton>
    </div>
  )
}
