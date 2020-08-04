import React, { Component } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import magic from './magic.png';
import { Card } from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns';

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
								<Card.Body className='p-3 mb-0 bg-warning text-white'>
									<Card.Text className='text-white'>
										<Link
											className='text-dark'
											exact
											to={`/wizards/${data.name}`}>
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
								<Card.Body className='p-4 mb-0 bg-success text-white text-xl-center'>
									<Card.Text className='text-white'>
										<Link
											className='text-white'
											exact
											to={`/wizards/${data.name}`}>
											{data.name}{' '}
											<img
												src={magic}
												alt='magic wand'
												height={30}
												width={30}
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
