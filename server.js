// const express = require('express');
// const server = express();
// const path = require('path');
// const stytch = require('stytch');

// // Boilerplate
// server.use(express.json());
// server.use(express.urlencoded({ extended: true }));
// server.use(express.static(path.join(__dirname, '/build')));
// let port = 3001 || process.env.PORT;

// // TODO: env file
// const client = new stytch.Client({
// 	project_id: 'project-test-e0d885b3-9f3b-47e0-b853-219acaa03700',
// 	secret: 'secret-test-bLa4ioUGJnCfSn-mL1OPKkSGNf5_34p71tg=',
// 	env: stytch.envs.test,
// });

// // TODO: Put into routes/api folder
// // POST /api/users
// server.post('/api/users', async (req, res) => {
// 	const response = await client.users
// 		.create({
// 			name: {
// 				first_name: req.body.firstName,
// 				last_name: req.body.lastName,
// 			},
// 			email: req.body.email,
// 		})
// 		.then((resp) => {
// 			console.log(resp);
// 			//res.json(resp);

            
// 			// Is successful so grab the user id from stytch and save it to the Mongo database along with the password

//             // TODO: Mongoose model User.create

//             const stytchId = resp.user_id;
// 			const userPassword = req.password;

//             const email = req.body.email;

// 			// Then send back a response to the client that the user was created
//             res.json({status:"success", info:{
//                 stytchId,
//                 sessionToken: ""
//             }})

//             // RELATED NOTES for login route:
// 			// On the flip side when logging in,
// 			// user logs in with email and password, so therefore, find in your Mongo database where firstName, lastName, and password matches. If successful, then get the stytch ID from this mongo document

//             // Then authenticate the stytch ID with your stytch client, then you get session_token and track if user logs out or expired.
            
// 			// Depending on project requirements, you may need to use something like bcrypt to encrypt / decrypt because that is so that the web developer would not see the plain password from opening mysql shell
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			res.json(err);
// 		});
// });

// // Routes
// // server.post('/api/authenticate', async (req, res) => {
// // 	const token = req.body.token;

// // Response object reference: https://stytch.com/docs/api/oauth-authenticate
// // 	client.oauth
// // 		.authenticate(token, { session_duration_minutes: 60 })
// // 		.then((resp) => {
// // 			res.json({
// // 				status: 'authorized (Only one time per OAuth flow)',
// // 				user_info: {
// // 					user_id: resp.user_id,
// // 					session_token: resp.session_token,
// // 				}
// // 			});
// // 		})
// // 		.catch((err) => {
// // 			res.json({ status: 'unauthorized' });
// // 		});
// // });

// server.listen(port, () => {
// 	console.log(`Server listening at ${port}`);
// });
