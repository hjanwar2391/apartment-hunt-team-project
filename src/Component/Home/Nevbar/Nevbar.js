import React from 'react';
import './Navbar.css'
import logo from '../../../logos/Logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Nevbar = () => {
  return (
    <Container>
      <Navbar bg="transparent" expand="lg">

        <Navbar.Brand href="#home">
          <img
            src={logo}
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto d-flex justify-content-center align-items-center">
            <Link className="m-3" to="/home" >Home</Link>
            <Link className="m-3" to="/sidebar">About</Link>
            <Link className="m-3" to="/home">Service</Link>
            <Link className="m-3" to="/home">Concerns</Link>
            <Link className="m-3" to="/AddRentHouse">Event</Link>
            <Link className="m-3" to="/home">Contact</Link>
            <Link className="m-3" to="/login"><Button variant="success">Login</Button></Link>
             
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Nevbar;