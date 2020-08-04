import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from "./Search"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
	render() {
	return (
		<Navbar collapseOnSelect variant='light' expand='md'>
			<LinkContainer to='/home'>
				<Navbar.Brand>Know Your Wizard</Navbar.Brand>
			</LinkContainer>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav>
					<LinkContainer to='/wizards'>
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/wizards'>
						<Nav.Link>Wizards</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/about'>
						<Nav.Link>About</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
}

export default Header;
