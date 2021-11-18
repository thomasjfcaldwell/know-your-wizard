import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


class About extends Component {
	render() {
		return (
			<Jumbotron>
				<Container>
					<h1>About This Site</h1>
					<p>
						Built over the course of a few days, using react and react
						bootstrap. First project of its kind by the development. He will
						look long back on this in years to come and see how far he has come
						- hello future Thomas! Hope all is well in the world!
					</p>

					<p>Api data has been used from https://www.potterapi.com/</p>
				</Container>
			</Jumbotron>
		);
	}
}

export default About;
