import React, { Component } from 'react';
import Header from './Header';
import DashBoard from './Dashboard';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

const key = process.env.REACT_APP_MYAPI_KEY;

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
	}
	componentDidMount() {
		axios(
			'https://www.potterapi.com/v1/characters/?key=$2a$10$jMMAc6AU4i8uxxNpsy9ImOMOEDXTf6rzLDcdWq2E9FAR0.TmcNA9G'
		)
			.then((json) => {
				this.setState({ data: json.data });
				console.log(this.state.data[19].name);
			})
			.catch(console.error);
	}
	render() {
		return (
			<div>
				<Header />
				<Route
					path='/'
					render={() => {
						return <DashBoard data={this.state.data} />;
					}}
				/>
			</div>
		);
	}
}

export default App;
