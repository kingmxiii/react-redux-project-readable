import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { ButtonGroup, Button } from 'react-bootstrap'
import Sort from './Sort'

//Render a Menu for PostList and CommentList 
export default function MenuBar(props){
  const { parentId, onNewClick } = props
  return(
    <div className="posts-bar">
      <ButtonGroup>
        { props.entity === 'posts' ?
          <LinkContainer to="/post/action/new">
          <Button bsStyle="warning">New Post</Button>
        </LinkContainer> :
          <Button
            bsStyle="warning"
            onClick={() => {
            onNewClick('new', null, parentId)
          }}
          >
          New Comment
        </Button>
       }
        <Sort entity={props.entity}/>
      </ButtonGroup>
    </div>
  )
}
