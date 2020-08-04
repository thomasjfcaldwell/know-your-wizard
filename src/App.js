import React, { Component } from 'react';
import Header from './Header';
import DashBoard from './Dashboard';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import About from './About';
import Wizards from './Wizards';
import Search from './Search';
import Button from 'react-bootstrap/button';
import Background from './Background.jpg'



const key = process.env.REACT_APP_MYAPI_KEY; /// api key in a varible for use later
const url = 'https://www.potterapi.com/v1/characters/?key=$2a$10$jMMAc6AU4i8uxxNpsy9ImOMOEDXTf6rzLDcdWq2E9FAR0.TmcNA9G/';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			///setting State for data being brought in below
			data: [],
			searchWizards: '',
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

	handleInput = (event) => {
		this.setState({ searchWizard: event.target.value });
		console.log(event.target.value);
	};

	render() {
		let filteredWizards = this.state.data.filter((wizard) => {
			return wizard.name.includes(this.state.searchWizard);
		});
		return (
        <div className ="container">
				<Header />
				<Search handleInput={this.handleInput} />
				<main>
					<Route path='/' />
					<Route
						exact
						path='/wizards'
						render={() => {
							return (
								<DashBoard
									searchWizard={this.state.searchWizard}
									filteredWizards={filteredWizards}
									data={this.state.data}
								/>
							); /// sending data down to dashboard component
						}}
					/>
					<Route path='/about' component={About} />
					<Route
						path='/wizards/:name'
						exact
						render={(routerProps) => {
							return (
								<Wizards match={routerProps.match} data={this.state.data} />
							); /// matching wizards name on the click so to bring up info on that wizard once clicked. Plus passing data down
						}}
					/>
				</main>
			</div>
		);
	}
}

export default App;
