import React, { Component } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import './Dashboard.css';

class DashBoard extends Component {
	render() {
		if (this.props.searchWizard) {
			return (
				<div className='dashboard'>
					<h1> Filtered Wizards</h1>
					<ul>
						{this.props.filteredWizards.map((data, id) => {
							///maping through data to display information
							return (
								<li key={id}>
									<Link exact to={`/wizards/${data.name}`}>
										{data.name}{' '}
									</Link>
								</li>
							); // list of chosen datasets plus link to take user to page
						})}
					</ul>
				</div>
			);
		}
		//console.log(this.props.data);
		else {
			return (
				<div className='dashboard'>
					<h1>Wizards</h1>
					<ul>
						{this.props.data.map((data, id) => {
							///maping through data to display information
							return (
								<li key={id}>
									<Link exact to={`/wizards/${data.name}`}>
										{data.name}{' '}
									</Link>
								</li>
							); // list of chosen datasets plus link to take user to page
						})}
					</ul>
				</div>
			);
		}
	}
}

export default DashBoard;
