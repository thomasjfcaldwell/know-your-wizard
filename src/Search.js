import React, { Component } from 'react';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<form>
				<input onChange={this.props.handleInput} type='text' placeholder ="type here to find your favorite wizard"/>
			</form>
		);
	}
}

export default Search;
