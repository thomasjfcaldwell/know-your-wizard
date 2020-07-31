import React, { Component } from 'react';

class Search extends Component {
	constructor() {
		super();
		this.state = {
			wizardName: '',
		};
	}
	handleName = (event) => {
		this.setState({ wizardName: event.target.value });
	};
	submitForm = (event) => {
		event.preventDefault();
		console.log('its working!');
	};
	render() {
		return (
			<div>
				<form onSubmit={this.submitForm}>
					<label htmlFor='search'>Search for your favorite Wizard</label>

					<input
						id='search'
						type='text'
						onChange={this.handleName}
						value={this.state.wizardName}
					/>
					<button type='submit'>Wave the wand</button>
				</form>
			</div>
		);
	}
}

export default Search;
