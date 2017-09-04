import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { ButtonGroup, Button } from 'react-bootstrap'
import Sort from './Sort'

export default function PostsBar(props){
  return(
    <div className="posts-bar">
      <ButtonGroup>
        <LinkContainer to="/post/action/new">
          <Button bsStyle="primary">New Post</Button>
        </LinkContainer>
        <Sort/>
      </ButtonGroup>
    </div>
  )
}
