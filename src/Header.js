import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
	render() {
	return (
		<Navbar>
			<div>
				<a href='/about'>Search for wizards</a>
			</div>
		</Navbar>
	);
};
}

export default Header;
