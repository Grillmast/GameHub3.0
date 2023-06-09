import React from 'react';

const GameCard = ({ game }) => {
  return (
    <div>
      <h2>{game.name}</h2>
      <p>Released: {game.released}</p>
      <p>Rating: {game.rating}</p>
      {/* Display other relevant properties */}
    </div>
  );
};

export default GameCard;
