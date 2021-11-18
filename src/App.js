import React, { Component } from 'react';
import Header from './Header';
import DashBoard from './Dashboard';
import axios from 'axios';
import { Route } from 'react-router-dom';
import About from './About';
import Wizards from './Wizards';
import Search from './Search';

const key = process.env.REACT_APP_MYAPI_KEY; /// api key in a varible for use later
const url = 'http://hp-api.herokuapp.com/api/characters';
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
		axios(`${url}`)
			.then((json) => {
				this.setState({ data: json.data });
				console.log(this.state.data[0]);
			})
			.catch(console.error);
	}

	handleInput = (event) => {
		this.setState({ searchWizard: event.target.value });
	 };
	render() {
		let filteredWizards = this.state.data.filter((wizard) => {
			return wizard.name.includes(this.state.searchWizard);
		});
		return (
			<div className='container'>
				<Header />
				<Search handleInput={this.handleInput} />
				<main>
					<Route
						exact
						path='/'
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
