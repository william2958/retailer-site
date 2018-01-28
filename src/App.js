import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import FourierSolutions from './containers/FourierSolutions/FourierSolutions';
import Retailer from "./containers/Retailer/Retailer";

class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path="/retailer/:id" component={Retailer} />
					<Route path="/" exact component={FourierSolutions} />
				</Switch>
			</div>
		);
	}
}

export default App;
