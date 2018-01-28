import React, {Component} from 'react';
import axios from 'axios';
import Transaction from './Transaction/Transaction';

class Transactions extends Component {

	state = {
		transactions: [],
		page: 1
	};

	componentDidMount() {
		const queryParams = [];
		queryParams.push('module=account');
		queryParams.push('action=txlist');
		queryParams.push('address=' + this.props.address);
		queryParams.push('startblock=0');
		queryParams.push('endblock=99999999');
		queryParams.push('page=' + this.state.page);
		queryParams.push('offset=' + 10);
		queryParams.push('sort=desc');
		queryParams.push('apiKey=Q944RGWG1V5Q5C3EVGX93CHHAW8HMPT5FK');
		const queryString = queryParams.join('&');
		axios.get('https://api.etherscan.io/api?' + queryString)
			.then(response => {
				this.setState({transactions: response.data.result});
			})
	}

	render () {

		let transactionList = [];

		for (let transaction of this.state.transactions) {
			transactionList.push(<Transaction {...transaction} key={transaction.hash}/>)
		}


		return (
			<div>{transactionList}</div>
		)
	}

}

export default Transactions;
