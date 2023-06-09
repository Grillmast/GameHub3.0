import React from 'react';
import { useQuery, gql } from '@apollo/client';
import GameCard from '../component/GameCard';

const GET_GAMES = gql`
  query GetGames($genre: String!) {
    games(genre: $genre) {
      _id
      name
      released
      added
      created
      updated
      rating
      metacritic
      screenshots {
        _id
        image
      }
      trailers {
        _id
        name
        preview
      }
      genres {
        _id
        name
        slug
        games_count
        image_background
        description
      }
      platforms {
        _id
        name
        slug
        games_count
        image_background
        description
      }
      tags {
        _id
        name
        slug
        games_count
        image_background
        description
      }
    }
  }
`;

const GameCardContainer = ({ genre }) => {
  const { loading, error, data } = useQuery(GET_GAMES, {
    variables: { genre }, // Pass the genre variable to the query
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const games = data.games;

  return (
    <div>
      {games.map((game) => (
        <GameCard key={game.id} game={game} /> // Use the game _id as the key
      ))}
    </div>
  );
};

export default GameCardContainer;
