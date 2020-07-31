import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
	render() {
		return (
			<div className='headercontainer'>
				<nav>
					<Link to='/wizards'>Home</Link>
					<Link to='/about'>About This Site</Link>
				</nav>
			</div>
		);
	}
}

export default Header;
