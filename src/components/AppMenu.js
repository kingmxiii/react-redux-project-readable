import React from 'react'
import { Navbar, Nav , NavItem} from 'react-bootstrap'

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
          <NavItem eventKey={1} href="/">Home</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
