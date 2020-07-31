import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search'
class Header extends Component {
	render() {
		return (
			<div className='headercontainer'>
				<nav>
					<Link to='/wizards'>Home</Link>
					<Link to='/about'>About This Site</Link>
                    <Search />
				</nav>
			</div>
		);
	}
}

export default Header;
