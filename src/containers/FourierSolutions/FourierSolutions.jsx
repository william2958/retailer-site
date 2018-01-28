import React, {Component} from 'react';

class FourierSolutions extends Component {

	state = {
		address: null
	};

	setAddressHandler = (address) => {
		this.setState({address: address});
	};

	render () {
		return <h1>Hello</h1>
	}

}

export default FourierSolutions;
