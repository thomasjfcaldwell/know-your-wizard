import React, { Component } from 'react';
import Card from "react-bootstrap/Card"

//console.log(this.props.data);

class Wizards extends Component {
	render() {
		let wizards; /// varible to hold information
		for (let i = 0; i < this.props.data.length; i++) {
			/// for loop to iterate over data
			if (this.props.data[i].name === this.props.match.params.name) {
				/// condition needed to display correct wizard
				wizards = this.props.data[i]; /// stored information to use
			}
		}
		if (wizards.role === " ") {
			return (
				<div>
					<p>minor charactor</p>
				</div>
			);
		} 

		return (
			<Card>
				<div class='card text-center'>
					<div class='card-header'>Your Chosen Wizard</div>
					<div class='card-body'>
						<h5 class='card-title'>{wizards.name}</h5>
						<p class='card-text'>
							{wizards.name} is a {wizards.role}
						</p>
					</div>
					<div class='card-footer text-muted'>'arry Potter world</div>
				</div>
				<form>
					<button Route='/wizards/${index++}'>Next</button>
					<button>Prev</button>
				</form>
			</Card>
		);
	}
}

export default Wizards;
