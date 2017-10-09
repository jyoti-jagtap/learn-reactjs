import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/index';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, NavLink, browserHistory} from 'react-router-dom';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit() {
		let { email, password } = this.state;
		this.props.login(email, password); 
		setTimeout(() => {
			if(this.props.isLoginSuccess) {
				this.props.history.push('/dashboard');
			}
		}, 1000)
	}

	handleChange(e) {
		e.target.classList.add('active');
		this.setState({
			[e.target.name]: e.target.value
		});
		this.showInputError(e.target.name);
	}
  
	showInputError(refName) {
		const validity = this.refs[refName].validity;
		const label = document.getElementById(`${refName}Label`).textContent;
		const error = document.getElementById(`${refName}Error`);
		const isPassword = refName.indexOf('password') !== -1;

		if (!validity.valid) {
			if (validity.valueMissing) {
				error.textContent = `${label} is a required field`; 
			} else if (validity.typeMismatch) {
				error.textContent = `${label} should be a valid email address`; 
			} else if (isPassword && validity.patternMismatch) {
				error.textContent = `${label} should be longer than 4 chars`; 
			} 
			return false;
		}

		error.textContent = '';
		return true;
	}

	render() {
		let {email, password} = this.state;
		let {isLoginPending, isLoginSuccess, loginError} = this.props;
		return (
		<div className="loginWrap">
			<form role="form" className="form-signin" name="loginForm"  noValidate >
			<h4 className="form-signin-heading"><em>Login Form</em></h4>
			<div className="form-group">
				<label className="sr-only" id="emailLabel">Username</label>
				<input className="form-control" type="email"  name="email" ref="email" value={this.state.email} onChange={ this.handleChange } required/>
				<div className="error" id="emailError" />
			</div>
			<div className="form-group">
				<label className="sr-only" id="passwordLabel">Password</label>
				<input className="form-control" type="password" name="password" ref="password" value={this.state.password} onChange={ this.handleChange }
				pattern=".{5,}" required />
				<div className="error" id="passwordError" />
			</div>
			<div className="checkbox"> 
				<label> 
				<input type="checkbox" value="remember-me" />
				Remember me  
				</label>
			</div>
			<NavLink  className="text-right" activeClassName="active" to="/register">Register Here</NavLink>

			<button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.handleSubmit.bind(this)}>Login</button>

			<p className="text-center">OR</p>
			<a href="#" title="google+" className="text-center">Sign up with google+</a>
				{/* { isLoginPending && <div>Please wait...</div> } */}
				{ isLoginSuccess && <div>Success.</div> }
				{ loginError && <div>{loginError.message}</div> }
			</form>	
		</div>
		)
	}

  
}
 
const mapStateToProps = (state) => {
	return {
		isLoginSuccess: state.login.isLoginSuccess,
		loginError: state.login.loginError
	};
}
 
const mapDispatchToProps = (dispatch) => { return bindActionCreators({login},dispatch)}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);