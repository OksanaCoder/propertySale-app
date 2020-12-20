
import React, { Component, useState } from 'react'
import logo from '../img/rent.png'
import { Container, Navbar, Nav, NavDropdown, Button, Modal, Form} from 'react-bootstrap'
 const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
        <Navbar expand="lg">
            <Container >
  <Navbar.Brand href="#home"><img src={logo} style={{width: '50px'}}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <NavDropdown title="Home" id="basic-nav-dropdown" className='mr-4'>
        <NavDropdown.Item href="#action/3.1">Home 01</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Home 02</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Home 03</NavDropdown.Item>
        
      </NavDropdown>
      <NavDropdown title="Property" id="basic-nav-dropdown" className='mr-4'>
        <NavDropdown.Item href="#action/3.1">Property</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Property available</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Property by city</NavDropdown.Item>
       
      </NavDropdown>
      <NavDropdown title="Pages" id="basic-nav-dropdown" className='mr-4'>
        <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Advisor</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Search List</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Search Grid</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">FAQ</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Pricing</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">User list</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Registration</NavDropdown.Item>
        
      </NavDropdown>
      <NavDropdown title="News" id="basic-nav-dropdown" className='mr-4'>
        <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">News details</NavDropdown.Item>
       
      </NavDropdown>
      <Nav.Link style={{color: '#000'}} href="#contact">Contact us</Nav.Link>
 
 
      
      <Button variant="outline-danger" className='ml-5' onClick={handleShow}>Add listing +</Button>

      <Modal show={show} onHide={handleClose} style={{'background': '#E04F5F'}}>
        <Modal.Header closeButton>
          <Modal.Title>New Listing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group controlId="formBasicLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter location" />
        </Form.Group>

        <Form.Group controlId="formBasicRoom">
          <Form.Label>Quantity of Rooms</Form.Label>
          <Form.Control type="number" placeholder="Enter a number of rooms" />
        </Form.Group>
        <Form.Group controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter a price ($)" />
        </Form.Group>

      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
)
}
export default NavBar
