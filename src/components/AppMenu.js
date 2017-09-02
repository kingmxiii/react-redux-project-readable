import React from 'react'
import { Navbar, Nav , NavItem} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

export default function AppMenu(props){
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
          <Navbar.Brand>
            <span>My Readables</span>
          </Navbar.Brand>
          <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/">
            <NavItem>Home</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
