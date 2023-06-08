import { useStytch } from '@stytch/react';
import React, { useState } from 'react';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const stytchClient = useStytch();

	const resetPasswordByEmail = () => {
		stytchClient.passwords.resetByEmailStart({
			email: "erich.ziegler11@gmail.com",
		});
	};

	const login = () => {
		stytchClient.passwords
			.authenticate({
				email,
				password,
				session_duration_minutes: 60,
			})
			.then((res) => {
				console.log('Success', res);
				// TODO: grab error message from res and display it on UI for user
			})
			.catch((err) => {
				console.log('Error:', err);
			});
	};

	return (
		<>
			<input
				placeholder='Email'
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<input
				placeholder='Password'
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>

			<button onClick={login}>Login</button>

			<div>
				<p>Forgot your password?</p>
				<button onClick={resetPasswordByEmail}>Reset Password</button>
			</div>
		</>
	);
}
