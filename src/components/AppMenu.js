import React from 'react'
import { Navbar, Nav , NavItem, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import CategoriesList from './CategoriesList'
import { Link } from 'react-router-dom'
import Home from 'react-icons/lib/fa/home'
import List from 'react-icons/lib/fa/list'

export default function AppMenu(props){
  return (
    <Navbar collapseOnSelect className="app-navbar">
      <Navbar.Header>
          <Navbar.Brand className="app-navbar-brand">
            <Link to="/">
              <span>My Readables</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/">
            <NavItem eventKey={1}><Home /> Home</NavItem>
          </LinkContainer>
           <NavDropdown eventKey={2} title={<span><List /> Categories</span>} id="basic-nav-dropdown">
             <CategoriesList categories={props.cats}/>
           </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
