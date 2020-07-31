import React, { Component } from 'react';
import Header from './Header';
import './Dashboard.css';
import { Link, Route } from 'react-router-dom';

class DashBoard extends Component {
	render() {
		//console.log(this.props.data);
		return (
			<div>
				<Header />
				<h1>Wizards</h1>
				<ul>
					{this.props.data.map((data, id) => {
						return <li key={id}><Link to={`/${data.name}`}>{data.name}{" "}{data.role}</Link></li>;
					})}
				</ul>
			</div>
		);
	}
}

export default DashBoard;
