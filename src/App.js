import React, { Component } from 'react';
import Header from './Header';
import DashBoard from './Dashboard';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import About from './About';
import Wizards from './Wizards';

const key = process.env.REACT_APP_MYAPI_KEY; /// api key in a varible for use later

class App extends Component {
	constructor() {
		super();
		this.state = { ///setting State for data being brought in below
			data: [], 
		};
	}
	componentDidMount() {
		axios(
			'https://www.potterapi.com/v1/characters/?key=$2a$10$jMMAc6AU4i8uxxNpsy9ImOMOEDXTf6rzLDcdWq2E9FAR0.TmcNA9G'
		)
			.then((json) => {
				this.setState({ data: json.data });
			})
			.catch(console.error);
	}
	render() {
		return (
			<div>
				<Route
					exact
					path='/wizards'
					render={() => {
						return <DashBoard data={this.state.data} />; /// sending data down to dashboard component
					}}
				/>
				<Route path='/about' component={About} /> 
				<Route
					path='/wizards/:name'
					render={(routerProps) => {
						return (<Wizards match={routerProps.match} data={this.state.data} />) /// matching wizards name on the click so to bring up info on that wizard once clicked. Plus passing data down
					}}
				/>
			</div>
		);
	}
}

export default App;
