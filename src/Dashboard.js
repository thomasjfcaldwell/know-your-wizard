import React, { Component } from 'react';
import Header from './Header';
import './Dashboard.css';
import { Link, Route } from 'react-router-dom';

class DashBoard extends Component {
	render() {
		//console.log(this.props.data);
		return (
			<div className="dashboard">
				<Header />
				<h1>Wizards</h1>
				<ul>
					{this.props.data.map((data, id) => { ///maping through data to display information
						return <li key={id}><Link to={`/wizards/${data.name}`}>{data.name}{" "}{data.role}</Link></li>; // list of chosen datasets plus link to take user to page
					})}
				</ul>
			</div>
		);
	}
}

export default DashBoard;
