import { Button } from '@mui/material';
import { useStytch } from '@stytch/react';
import React from 'react';

export default function Logout() {
	const stytchClient = useStytch();

	const logout = () => {
		stytchClient.session.revoke();
	};

	return <Button onClick={logout}>Logout</Button>;
}
