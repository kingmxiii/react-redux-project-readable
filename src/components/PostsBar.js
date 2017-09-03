import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { ButtonGroup, Button } from 'react-bootstrap'
import PostSort from './PostSort'

export default function PostsBar(props){
  return(
    <div className="posts-bar">
      <ButtonGroup>
        <LinkContainer to="/post/action/add">
          <Button>New Post</Button>
        </LinkContainer>
        <PostSort/>
      </ButtonGroup>
    </div>
  )
}
