import React, {Component} from 'react';

import classes from './FourierSolutions.css';
import fourierLogo from '../../assets/images/logo.jpg';

class FourierSolutions extends Component {

	state = {
		value: ''
	};

	componentDidMount () {

	};

	handleChange = (event) => {
		this.setState({value: event.target.value});
	};

	submitAddress = (event) => {
		event.preventDefault();
		if (this.state.value.length > 0) {
			this.props.history.push('/retailer/' + this.state.value);
		}
	};

	render () {
		return (
			<div className={classes.FourierSolutions}>
				<img className={classes.Logo} src={fourierLogo} alt="Fourier Logo" />
				<p>To begin, please enter your retailer address below.</p>
				<form className={classes.AddressForm} onSubmit={this.submitAddress}>
					<input className={classes.AddressInput} type="text" placeholder="Your Ethereum Address" value={this.state.value} onChange={this.handleChange}/>
					<input className={classes.AddressSubmit} type="submit" value="Submit" />
				</form>
			</div>
		)
	}

}

export default FourierSolutions;
