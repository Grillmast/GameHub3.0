const axios = require('axios');
const { User, Game, GameDetails, Genre, Platform, Screenshot, Tag, Trailer } = require('../models');

// Function to authenticate and obtain the token
const login = async () => {
  try {
    const response = await axios.post('https://api.rawg.io/api/auth/login', {
      // Include your login credentials, such as username and password
      email: 'c_medlin19@yahoo.com',
      password: 'CombatAces1929!',
    });
    console.log(response.data);

    const token = response.data.key;

    // Return the obtained token with "Bearer" prefix
    return `Bearer ${token}`;
  } catch (error) {
    console.error('Error occurred during login:', error);
    throw new Error('Failed to authenticate');
  }
};



const resolvers = {
  Query: {
    games: async (_, { genre, platform, tag, sortBy }) => {
      let filters = {};
  
      if (genre) {
        filters.genre = genre;
      }
  
      if (platform) {
        filters.platforms = platform;
      }
  
      if (tag) {
        filters.tags = tag;
      }
  
      try {
        // Authenticate and obtain the token
        const token = await login();
  
        // Fetch games from the Rawg API
        const response = await axios.get('https://api.rawg.io/api/games?key=e4e4849395b34db48332abd6feedc78e', {
            params: {
            genres: filters.genre,
            platforms: filters.platforms,
            tags: filters.tags,
            ordering: sortBy,
          },
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'YourAppName/1.0',
            'Authorization': token, // Use the updated token format with "Bearer" prefix
          },          
        });
  
        const games = response.data.results;
  
        // Return the fetched games
        return games;
      } catch (error) {
        console.error('Error occurred while fetching games:', error);
        throw new Error('Failed to fetch games');
      }
    },
    // ...
  }
};

login()
  .then(() => {
    console.log('Successfully authenticated');
  })
  .catch((error) => {
    console.error('Error occurred during authentication:', error);
  });

module.exports = resolvers;
