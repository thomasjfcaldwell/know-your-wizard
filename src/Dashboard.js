import React, { Component } from 'react';
import Header from './Header';
import './Dashboard.css';

class DashBoard extends Component {
	render() {
		console.log(this.props.data);
		return (
			<div>
				<Header />
				<h1>Wizards</h1>
				<ul>
					{this.props.data.map((data, id) => {
						return <li key={id}>{data.name}{" "}{data.role}</li>;
					})}
				</ul>
			</div>
		);
	}
}

export default DashBoard;
