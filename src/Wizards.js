import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Wizards extends Component {
	render() {
		let wizards; /// varible to hold information
		for (let i = 0; i < this.props.data.length; i++) {
			/// for loop to iterate over data
			if (this.props.data[i].name === this.props.match.params.name) {
				/// condition needed to display correct wizard
				wizards = this.props.data[i]; /// stored information to use
			}
			console.log(this.props.data);
		}
		return (
			<Card>
				<div className='card-header'>Your Chosen Wizard</div>
				<div className='card-body'></div>
				<div>
					<h1>{wizards.name}</h1>
					<h1>{wizards.house}</h1>
					<h1>{wizards.gender}</h1>
				</div>
				<div className='card-footer text-muted'>'arry Potter world</div>
			</Card>
		);
	}
}

export default Wizards;
