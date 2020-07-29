import React, { Component } from 'react';
import Header from './Header';
import DashBoard from './Dashboard';


const key = process.env.REACT_APP_MYAPI_KEY;


class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<DashBoard />
			</div>
		);
	}
}

export default App;
