import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logout from './Logout';
import { alpha, styled } from '@mui/material/styles';
import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
	{ path: '/', text: 'Home' },
	{ path: '/login', text: 'Login' },
	{ path: '/signup', text: 'Sign Up' },
	{ path: '/profile', text: 'Profile' },
];

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: 20,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

export default function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='menu'
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant='h6'
							component='div'
							sx={{ flex: 1, textAlign: 'center' }}
						>
							GameHub
						</Typography>
					</div>
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder='Search for a game...'
							inputProps={{ 'aria-label': 'search' }}
							sx={{
								width: 250,
								'& .MuiInputBase-input': {
									width: 200,
								},
							}}
						/>
					</Search>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<ul>
							{links.map((link) => {
								return (
									<li key={link.text}>
										<NavLink to={link.path}>{link.text}</NavLink>
									</li>
								);
							})}
						</ul>
						<Logout />
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
