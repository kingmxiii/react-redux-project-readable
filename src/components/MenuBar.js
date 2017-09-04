import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { ButtonGroup, Button } from 'react-bootstrap'
import Sort from './Sort'

export default function MenuBar(props){
  return(
    <div className="posts-bar">
      <ButtonGroup>
        { props.entity === 'posts' ?
          <LinkContainer to="/post/action/new">
          <Button bsStyle="primary">New Post</Button>
        </LinkContainer> :
          <Button bsStyle="primary">New Comment</Button>
       }
        <Sort entity={props.entity}/>
      </ButtonGroup>
    </div>
  )
}
