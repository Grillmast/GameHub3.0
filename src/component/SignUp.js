import { useStytch } from '@stytch/react';
import React, { useState } from 'react';

export default function SignUp() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const stytchClient = useStytch();

	const signUp = () => {
		stytchClient.passwords
			.strengthCheck({ email, password })
			.then((res) => {
				console.log('Success', res);
				// TODO: grab error message from res and display it on UI for user
			})
			.catch((err) => {
				console.log('Error:', err);
			});

            // User is logged in after sign up, session is created
		stytchClient.passwords.create({
			email,
			password,
			session_duration_minutes: 60,
		});
	};

	return (
		<div>
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

			<button onClick={signUp}>Sign Up</button>
		</div>
	);
}
