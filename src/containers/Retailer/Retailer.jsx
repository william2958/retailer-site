import React, {Component} from 'react';
import axios from 'axios';
import Transactions from '../../components/Transactions/Transactions';
import QRCode from 'qrcode.react';

class Retailer extends Component {

	state = {
		address: null,
		etherDetails: null,
		etherPrice: 0,
		error: null,
		priceInEth: 0
	};

	componentWillMount() {
		this.setState({address: this.props.match.params.id});
	}

	componentDidMount() {
		axios.get('https://api.coinmarketcap.com/v1/ticker/ethereum/', { crossdomain: true })
			.then(response => {
				this.setState({
					etherDetails: response.data[0],
					etherPrice: response.data[0].price_usd
				})
			})
	}

	handleChange = (event) => {
		let priceInEth = event.target.value / this.state.etherPrice;
		this.setState({priceInEth: priceInEth})
	};

	returnToHome = () => {
		this.props.history.push('/');
	};

	render () {

		return (
			<div>
				<h5>Your address: {this.state.address}</h5>
				<button onClick={this.returnToHome}>Exit</button>
				Current price of ether: {this.state.etherPrice}
				<form>
					<label>
						Amount:
						<input type="number" value={this.state.value} onChange={this.handleChange}/>
					</label>
					<input type="submit" value="Submit" />
				</form>
				{this.state.priceInEth.toFixed(7)}
				<QRCode value={this.state.address}/>
				<Transactions address={this.state.address}/>
			</div>
		)

	}



}


export default Retailer;
