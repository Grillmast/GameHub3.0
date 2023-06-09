import React, { useState } from 'react';
import { useStytch } from '@stytch/react';
import Header from './Header';

export default function ResetPassword() {
	const [newPassword, setNewPassword] = useState('');
    const stytchClient = useStytch();

    const token = new URLSearchParams(window.location.search).get('token');

    const resetPassword = () => {
        stytchClient.passwords.resetByEmail({
            token,
            password: newPassword,
            session_duration_minutes: 60,
        })
    }
	return (
		<div>
            <Header />
			<input
				placeholder='New Password'
				onChange={(e) => {
					setNewPassword(e.target.value);
				}}
			/>

			<button onClick={resetPassword}>Reset Password</button>
		</div>
	);
}
