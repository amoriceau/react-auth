import React, { useState } from 'react';

import Auth from '../Components/Auth';

import '../style/form.css';

const LoginRegister = props => {
	const [{ isVisibleRegister, isVisibleLogin }, toggleVisibility] = useState({
		isVisibleRegister: false,
		isVisibleLogin: true,
	});
	const [input, setInput] = useState({});

	const handleInputChange = e => {
		console.log(e.currentTarget.validity.valid);
		
		
		if (e.currentTarget.validity.valid) {
			setInput({
				...input,
				[e.currentTarget.name]: e.currentTarget.value,
			});
		}
	};
	const mailRegExp =  /\S+@\S+\.\S+/
	const Registerform = (
		<div className="form_container">
			<form>
				<h2>Welcome among us !</h2>
				<label>
					First Name
					<input type="text" name="first_name" placeholder="Enter first name" required />
				</label>
				<label>
					Last Name
					<input type="text" name="last_name" placeholder="Enter last name" required />
				</label>
				<label>
					Email
					<input type="email" name="emailReg" placeholder="Email" required />
				</label>
				<label>
					Password
					<input type="password" name="passwordReg" placeholder="Password" required />
				</label>
				<label>
					Confirm Password
					<input type="password" name="passwordConf" placeholder="Password" required />
				</label>
				<button>Send</button>
			</form>
		</div>
	);

	const Loginform = (
		<div className="form_container">
			<form>
				<h2>Good to see you again !</h2>
				<label>
					Email
					<input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
				</label>
				<label>
					Password
					<input
						type="password"
						name="password"
						placeholder="Password"
						onChange={handleInputChange}
						required
					/>
				</label>

				<button disabled={!(input.email !== undefined && input.password !== undefined && input.email !== '' && input.password !== '' && mailRegExp.test(input.email))}
					
					type="submit"
					onClick={(e) => {
						e.preventDefault()
						console.log(input);
							Auth.login(
								input,
								() => {
									props.history.push('/app');
								},
								() => {
									alert("an error has occured you're not recognized");
								}
							);
						
					}}
				>
					Send
				</button>
			</form>
		</div>
	);

	return (
		<div className="wholePage">
			{isVisibleRegister ? Registerform : ''}
			{isVisibleLogin ? Loginform : ''}
			
			<div className="button_container">
				<button
					className={isVisibleRegister ? 'button_select register active_button' : 'button_select register'}
					onClick={() => {
						toggleVisibility({ isVisibleRegister: true, isVisibleLogin: false });
					}}
				>
					Register
				</button>

				<button
					className={isVisibleLogin ? 'button_select login active_button' : 'button_select login'}
					onClick={() => {
						toggleVisibility({ isVisibleRegister: false, isVisibleLogin: true });
					}}
				>
					Login
				</button>
			</div>
		</div>
	);
};

export default LoginRegister;
