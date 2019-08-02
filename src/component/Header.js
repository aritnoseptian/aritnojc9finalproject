import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    InputGroup, InputGroupAddon, InputGroupText, Input
     } from 'reactstrap';

class Header extends Component {
    render(){
        return(
                <div>
                    <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">travel.com</NavbarBrand>
                    <NavbarToggler  />
                    <Collapse  navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to='/'>home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/managerproduck'>managerproduck</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/register'>
                                <Button color="primary" className="mx-3">Register</Button>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/login' >
                                <Button color="success">Login</Button>
                            </Link>
                        </NavItem>
                        </Nav>
                    </Collapse>
                    </Navbar>
        </div>
        )
    }
}

export default Header