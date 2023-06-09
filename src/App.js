import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StytchProvider } from '@stytch/react';
import { StytchHeadlessClient } from '@stytch/vanilla-js/headless';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import ResetPassword from './component/ResetPassword';
import Profile from './component/Profile';
import SignUp from './component/SignUp';
import NotMatch from './component/NotMatch';

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
					<Router>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/profile' element={<Profile />} />
							<Route path='/resetpassword/*' element={<ResetPassword />} />
              <Route path='*' element={<NotMatch />} />
						</Routes>
						<button onClick={logout}>Logout</button>
					</Router>
				</div>
			</ThemeProvider>
		</StytchProvider>
	);
}

export default App;