import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import './Navbarnya.css';


import logo from './Image/logo.png';
import gps from './Image/gps.png';




import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const Navbarnya = () => {
    return (
        <div>

<Navbar variant="dark" className="navini text-white" style={{ backgroundImage: 'linear-gradient(to right,#0E0C58, #0C3458, #07A8CB,#07A8CB)' }}>
      <Container fluid>
        <Navbar.Brand href="#home">
        <img
                alt=""
                src={logo}
                width="65"

                className="d-inline-block align-top"
              />{' '}
        </Navbar.Brand>
        <Navbar.Brand href="#home">
        <img
                alt=""
                src={gps}
                width="100"

                className="d-inline-block align-top"
              />{' '}
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            
            

    <Dropdown className="ml-5 dropdownya">
      <Dropdown.Toggle className="title" align="end" style={{ backgroundColor: '#ff000000', border: 'none'  }}>
        Kategori Berita
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropmenu text-white">
        <Dropdown.Item className="text-white" href="#headline">HeadLine News</Dropdown.Item>
        <hr className="hrmenu "/>
        <Dropdown.Item className="text-white" href="#sports">Aksi & Olahraga</Dropdown.Item>
        <Dropdown.Item className="text-white" href="#business">Bisnis</Dropdown.Item>
        <Dropdown.Item className="text-white" href="#entertainment">Hiburan</Dropdown.Item>
        <Dropdown.Item className="text-white" href="#kesehatan">Kesehatan</Dropdown.Item>
        <Dropdown.Item className="text-white" href="#technology">Teknologi</Dropdown.Item>
      </Dropdown.Menu>
   </Dropdown>
   
          </Nav>

          <Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pencarian"
              className="me-2"
              aria-label="Search"
            />
            <Button className="findHandler"  >Cari</Button>
          </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}

export default Navbarnya;

