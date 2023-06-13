import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import React from 'react';
import Header from './Header';
import GameCard from './GameCard';

export default function Profile() {
	return (
		<>
			<Header />
			<div>Profile Page</div>
			<Stack direction='row' spacing={2}>
				<Avatar>H</Avatar>
			</Stack>
			{/* Insert game card <GameCard />*/}
		</>
	);
}


// Need to pull user's first name out of the { User } object with: const { user } = useStytchUser();
// then use that to display their name on the profile and then display the first letter of their name in the Avatar
// Will also use the User object to display the games they have saved to their profile with a call to the database
// Build out card, same as on the home page, but make the Like button, when clicked again, it removes the game from their profile
