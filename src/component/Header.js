import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Uprise</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fa fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>

              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item> profile </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/orders'>
                  <NavDropdown.Item> orders </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <NavDropdown.Item>Login</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/signup'>
                  <NavDropdown.Item>Sign up</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin'>
                  <NavDropdown.Item>Admin</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
