import React, { Component } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import { Card, Container } from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns';

class DashBoard extends Component {
	render() {
		if (this.props.searchWizard) {
			return (
				<Container fluid>
					<CardColumns>
						{this.props.filteredWizards.map((data, id) => {
							///maping through data to display information
							return (
								<Card key={data.id}>
									<Card.Body className='p-3 mb-0 bg-warning text-white'>
										<Card.Text className='text-white'>
											<Link
												className='text-dark'
												exact='true'
												to={`/wizards/${data.name}`}>
												{data.name}{' '}
												<img
													src={data.image}
													alt='magic wand'
													height={20}
													width={10}
												/>
											</Link>
										</Card.Text>
									</Card.Body>
								</Card>
							); // list of chosen datasets plus link to take user to page
						})}
					</CardColumns>
				</Container>
			);
		} else {
			return (
				<Container fluid>
					<CardColumns>
						{this.props.data.map((data, id) => {
							///maping through data to display information
							return (
								<Card key={id}>
									<Card.Body className='p-4 mb-0 bg-success text-white text-xl-center'>
										<Card.Text className='text-white'>
											<Link
												className='text-white'
												exact='true'
												to={`/wizards/${data.name}`}>
												{data.name}{' '}
												{/* {data.image !== '' && (
													<img
														src={data.image}
														alt='none available'
														height={30}
														width={30}
													/>
												)} */}
											</Link>
											{data.image !== '' && (
												<img
													src={data.image}
													alt='none available'
													height={30}
													width={30}
												/>
											)}
										</Card.Text>
									</Card.Body>
								</Card>
							); // list of chosen datasets plus link to take user to page
						})}
					</CardColumns>
				</Container>
			);
		}
	}
}

export default DashBoard;
