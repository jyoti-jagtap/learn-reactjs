import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/index';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
class RegistrationForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		
		this.state = {     										   
						first_name: "",
						last_name: "",
						email: "",
						password: "",
						terms_check: false
					}
		}
	   
		handleClick(event){
			event.preventDefault(); //Used to prevent page refresh

			if(this.state.first_name.length>0 && this.state.last_name.length>0 && this.state.email.length>0 && this.state.password.length>0){
				this.setState({
					first_name: this.state.first_name,
					last_name: this.state.last_name,
					email: this.state.email,
					password: this.state.password,
					terms_check: this.state.terms_check
				})
				var payload = this.state;
				const { signup } = this.props.actions;
				signup(payload);
				setTimeout(() => {
					if(this.props.isSignUpSuccess) {
						this.props.history.push('/');
					}
				}, 1000);
			} else {
		      console.log("Input field value is missing");
		    }
		}
		handleChange(e) {
			e.target.classList.add('active');
			
			if((e.target.type) == "checkbox") {
				this.setState({
					[e.target.name]: e.target.checked
				}); 
			} else {				
				this.setState({
					[e.target.name]: e.target.value
				});
			}
			this.showInputError(e.target.name);
			// this.setState({
			// 	isCheckedTerms: !this.state.isCheckedTerms // flip boolean value
			// }, function() {
			// 	console.log(this.state);
			// }.bind(this));
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

		render(){
			let {isSignUpSuccess, signUpError} = this.props;
			return (
				<div className="loginWrap"> 
					<form className="form-signin" noValidate>
						<h4 className="form-signin-heading"><em>Sign up Form</em></h4>
						<div className="form-group">
							<label className="sr-only" id="first_nameLabel">First Name </label>
							<input className="form-control" placeholder="First Name" type="text" name="first_name" required  ref="first_name" value={this.state.first_name} onChange = {this.handleChange} />							
							<div className="error" id="first_nameError" />
						</div>
						<div className="form-group">
							<label className="sr-only" id="last_nameLabel">Last Name </label>
							<input className="form-control" placeholder="Last Name" type="text" name="last_name" required ref="last_name" value={this.state.last_name} onChange = {this.handleChange} />
							<div className="error" id="last_nameError" />
						</div>
						<div className="form-group">
							<label className="sr-only" id="emailLabel">Email</label>
							<input className="form-control" placeholder="Email address" type="email" name="email" required ref="email" value={this.state.email} onChange = {this.handleChange} />
							<div className="error" id="emailError" />
						</div>
						<div className="form-group">
							<label className="sr-only" id="passwordLabel">Password</label>
							<input className="form-control" placeholder="Password" type="password" name="password" required  ref="password" pattern=".{5,}" value={this.state.password} onChange = {this.handleChange} />
							<div className="error" id="passwordError" />
						</div>
						<div className="checkbox">
				          <label id="terms_checkLabel">
				            <input type="checkbox" name="terms_check" required ref="terms_check" value={this.state.terms_check} onChange = {this.handleChange} /> I agree to terms and privacy policy
				            <div className="error" id="terms_checkError" />
						  </label>
				        </div>
						<button type="submit" className="btn btn-lg btn-primary btn-block" onClick={(event) => this.handleClick(event)} >Sign in</button>			
						 { isSignUpSuccess && <div>Success.</div> }
						{ signUpError && <div>{signUpError.message}</div> } 
					</form>
				</div>
				
			)
		}
}

const mapStateToProps = (state) => {
	return {
		isSignUpSuccess: state.signup.isSignUpSuccess,
		signUpError: state.signup.signUpError
	};
}
 
const mapDispatchToProps = (dispatch) => { 
	return { 
		actions: bindActionCreators({signup}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);