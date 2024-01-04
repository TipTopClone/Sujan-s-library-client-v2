import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BsHouseDoor, BsBoxArrowInRight, BsPersonPlus } from 'react-icons/bs';
import sujan from '../../assets/logo1.png';
import '../../App.css'; // Import the main CSS file

const Header = () => {
  return (
    <Navbar expand='md' variant='dark' className='bg-primary'>
      <Container>
        <Link className='navbar-brand' to='/'>
          <img
            src={sujan}
            height={40}
            width={40}
            alt=''
            className='me-3 rounded-circle'
          />
          <span className='brand-text fs-4 fw-bold text-light'>
            Sujan's Library
          </span>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto fs-5'>
            <Link className='nav-link me-3 text-light' to='/'>
              <BsHouseDoor className='me-2' /> Home
            </Link>
            <Link className='nav-link me-3 text-light' to='/login'>
              <BsBoxArrowInRight className='me-2' /> Login
            </Link>
            <Link className='nav-link text-light' to='/signup'>
              <BsPersonPlus className='me-2' /> Signup
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
