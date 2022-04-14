import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form';
import './Search.css';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<form onChange={this.props.handleInput} className='form'>
				<input
					className='search-input'
					type='text'
					placeholder='Search for a wizard here'
				/>
			</form>
		);
	}
}

export default Search;
