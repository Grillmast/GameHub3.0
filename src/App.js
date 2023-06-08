import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StytchProvider } from '@stytch/react';
import { StytchHeadlessClient } from '@stytch/vanilla-js/headless';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Login from './component/Login';
import ResetPassword from './component/ResetPassword';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {
  const stytchClient = new StytchHeadlessClient(process.env.REACT_APP_STYTCH_PUBLIC_TOKEN)

  const logout = () => {
    stytchClient.session.revoke();
  };

  return (
		<StytchProvider stytch={stytchClient}>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<div className='App'>
					<Header />
					<Router>
						<Link to='/auth'> Login</Link>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/auth' element={<Login />} />
							<Route path='/resetpassword/*' element={<ResetPassword />} />
						</Routes>
						<button onClick={logout}>Logout</button>
					</Router>
				</div>
			</ThemeProvider>
		</StytchProvider>
	);
}

export default App;