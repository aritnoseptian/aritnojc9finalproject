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
    UncontrolledDropdown,DropdownToggle,
    DropdownMenu, DropdownItem } from 'reactstrap';


class ManagerProduck extends Component {
    render(){
        return(
          <div>
               <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">simpleMerce</NavbarBrand>
                <NavbarToggler  />
                <Collapse  navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem className='mt-2'>
                        <Link to='/' >All Products</Link>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Hallo, 
                    </DropdownToggle>
                    <DropdownMenu right>
                        <Link to='/ManagerProduct'>
                        <DropdownItem>
                        Manage product
                        </DropdownItem>
                        </Link>
                        <Link to='/Cart' className=''>Shoping Cart
                        {/* <Badge color="secondary" className='ml-1'></Badge> */}
                        <DropdownItem>
                        </DropdownItem>
                        </Link>
                        <DropdownItem divider />
                        <Button className='dropdown-item' >
                            Logout
                        </Button>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                </Collapse>
                </Navbar>
          </div>
        )
    }
}

export default ManagerProduck