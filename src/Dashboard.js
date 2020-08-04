import React, { Component } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import magic from './magic.png';
import { Card } from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';

class DashBoard extends Component {
	render() {
		if (this.props.searchWizard) {
			return (
				<CardColumns>
					<h1> Filtered Wizards</h1>

					{this.props.filteredWizards.map((data, id) => {
						///maping through data to display information
						return (
							<Card key={id}>
								<Card.Body>
									<Card.Text className='text-muted'>
										<Link exact to={`/wizards/${data.name}`}>
											{data.name}{' '}
											<img
												src={magic}
												alt='magic wand'
												height={20}
												width={20}
											/>
										</Link>
									</Card.Text>
								</Card.Body>
							</Card>
						); // list of chosen datasets plus link to take user to page
					})}
				</CardColumns>
			);
		}
		//console.log(this.props.data);
		else {
			return (
				<CardColumns>
					<h1>Wizards</h1>
					{this.props.data.map((data, id) => {
						///maping through data to display information
						return (
							<Card key={id}>
								<Card.Body>
									<Card.Text className='text-muted'>
										<Link exact to={`/wizards/${data.name}`}>
											{data.name}{' '}
											<img
												src={magic}
												alt='magic wand'
												height={20}
												width={20}
											/>
										</Link>
									</Card.Text>
								</Card.Body>
							</Card>
						); // list of chosen datasets plus link to take user to page
					})}
				</CardColumns>
			);
		}
	}
}

export default DashBoard;
