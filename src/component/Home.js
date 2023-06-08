import * as React from 'react';
import Button from '@mui/material/Button';
import GameCard from './GameCard';

const genres = [
    { name: 'Action', value: 'action' },
    { name: 'Adventure', value: 'adventure' },
    { name: 'Indie', value: 'indie' },
    { name: 'RPG', value: 'rpg' },
      { name: 'Simulation', value: 'simulation' },
      { name: 'Sports', value: 'sports' },
      { name: 'Strategy', value: 'strategy' },
      { name: 'Casual', value: 'casual' },
      { name: 'Arcade', value: 'arcade' },
      { name: 'Puzzle', value: 'puzzle' },
      { name: 'Platformer', value: 'platformer' },
      { name: 'Racing', value: 'racing' },
      { name: 'Shooter', value: 'shooter' },
      { name: 'Fighting', value: 'fighting' },
      { name: 'Family', value: 'family' },
      { name: 'Board Games', value: 'board-games' },
      { name: 'Educational', value: 'educational' },
      { name: 'Card', value: 'card' },
      { name: 'Massively Multiplayer', value: 'massively-multiplayer' },
];

const Home = () => {
  const [selectedGenre, setSelectedGenre] = React.useState('action');

  return (
    <div>
      <div>
        {genres.map((genre) => (
          <Button
            key={genre.value}
            onClick={() => setSelectedGenre(genre.value)}
            sx={{
              backgroundColor: selectedGenre === genre.value ? 'Grey' : 'white',
              color: selectedGenre === genre.value ? 'white' : 'black',
              borderRadius: '50px',
              padding: '10px 20px',
              marginRight: '10px',
              '&:hover': {
                backgroundColor: 'lightGrey',
              },
            }}
          >
            {genre.name}
          </Button>
        ))}
      </div>
      <GameCard />
    </div>
  );
}

export default Home;
