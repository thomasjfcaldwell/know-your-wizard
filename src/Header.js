import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<nav className='navbar navbar-expand-lg'>
				<svg
					className='nav-header'
					xmlns='http://www.w3.org/2000/svg'
					width='228'
					height='31'
					viewBox='0 0 228 31'>
					<text
						id='KNOW_YOUR_WIZARD'
						data-name='KNOW YOUR WIZARD'
						transform='translate(0 24)'
						fontSize='30'
						fontFamily='HarryP, Harry P'>
						<tspan x='0' y='0'>
							KNOW YOUR WIZARD
						</tspan>
					</text>
				</svg>
				<svg
					className='nav-subheader'
					xmlns='http://www.w3.org/2000/svg'
					width='166'
					height='16'
					viewBox='0 0 166 16'>
					<text
						id='THE_WORLD_OF_HARRY_POTTER'
						data-name='THE WORLD OF HARRY POTTER'
						transform='translate(0 12)'
						fontSize='14'
						fontFamily='HarryP, Harry P'>
						<tspan x='0' y='0'>
							THE WORLD OF HARRY POTTER
						</tspan>
					</text>
				</svg>
			</nav>
		);
	}
}

export default Header;
