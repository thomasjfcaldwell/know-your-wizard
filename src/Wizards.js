import React, { Component } from 'react';
import Header from "./Header"



class Wizards extends Component {
	render() {
        let wizards;
        for(let i = 0; i <this.props.data.length; i++) {
            if(this.props.data[i].name === this.props.match.params.name) {
                wizards = this.props.data[i]
            }
        }
		return (
        
			<div>
                <Header />
				<h1>Name{wizards.name}</h1>
			</div>
		);
	}
}

export default Wizards;
