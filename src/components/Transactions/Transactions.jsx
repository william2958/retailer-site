import React, {Component} from 'react';
import axios from 'axios';

class Transactions extends Component {

	state = {
		transactions: []
	};

	render () {
		return (
			<h1>Transactions</h1>
		)
	}

}

export default Transactions;
