import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StytchProvider } from '@stytch/react';
import { StytchHeadlessClient } from '@stytch/vanilla-js/headless';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
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

const client = new ApolloClient({
	uri: 'http://localhost:3001/graphql',
	cache: new InMemoryCache(),
  });
  

function App() {
  const stytchClient = new StytchHeadlessClient(process.env.REACT_APP_STYTCH_PUBLIC_TOKEN)

  const logout = () => {
    stytchClient.session.revoke();
  };

  return (
		<StytchProvider stytch={stytchClient}>
			<ApolloProvider client={client}>
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
			</ApolloProvider>
		</StytchProvider>
	);
}

export default App;