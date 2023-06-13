import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StytchProvider } from '@stytch/react';
import { StytchHeadlessClient } from '@stytch/vanilla-js/headless';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
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

const client = new ApolloClient({
	uri: 'http://localhost:3001/graphql',
	cache: new InMemoryCache(),
  });
  

function App() {
  const stytchClient = new StytchHeadlessClient(process.env.REACT_APP_STYTCH_PUBLIC_TOKEN)


  return (
		<StytchProvider stytch={stytchClient}>
			<ApolloProvider client={client}>
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
						{/* <button onClick={logout}>Logout</button> */}
					</Router>
				</div>
			</ThemeProvider>
			</ApolloProvider>
		</StytchProvider>
	);
}

export default App;