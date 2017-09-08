import React from 'react'
import { Navbar, Nav , NavItem, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import CategoriesList from './CategoriesList'

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
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
           <NavDropdown eventKey={2} title="Categories" id="basic-nav-dropdown">
             <CategoriesList categories={props.cats}/>
           </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
