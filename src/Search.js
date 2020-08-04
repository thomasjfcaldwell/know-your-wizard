import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Form onChange={this.props.handleInput}>
				<Row>
					<Col>
						<Form.Group>
							<Form.Control
								type='text'
								placeholder='type here to find your favorite wizard'
							/>
						</Form.Group>
						<Form.Text className='text-muted'>
							Search by Wizard Name to bring up more information
						</Form.Text>
					</Col>
				</Row>
			</Form>
		);
	}
}

export default Search;
