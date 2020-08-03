import React, { Component } from 'react';
import Header from './Header';
import { Route } from 'react-router-dom';

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

		return (
			<div>
				<Header />
				<main>
					<h1>{wizards.name}</h1>
					<h1>{wizards.role}</h1>
				</main>
				<form>
					<button Route="/wizards/${index++}">Next</button>
					<button>Prev</button>
				</form>
			</div>
		);
	}
}

export default Wizards;
