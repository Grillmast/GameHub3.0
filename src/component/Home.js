import * as React from 'react';
import GameCard from './GameCard';
import Button from '@mui/material/Button';
import { alpha, styled, useTheme } from '@mui/material/styles';

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
    { name: 'Racing', value: 'racing' },
    { name: 'Shooter', value: 'shooter' },
    { name: 'Fighting', value: 'fighting' },
    { name: 'Platformer', value: 'platformer' },
    { name: 'Massively Multiplayer', value: 'massively-multiplayer' },
    { name: 'Family', value: 'family' },
    { name: 'Board Games', value: 'board-games' },
    { name: 'Educational', value: 'educational' },
    { name: 'Card', value: 'card' },
];

const GenreButton = styled(Button)(({ theme }) => ({
  borderRadius: 20,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const Home = () => {
  const theme = useTheme();
  const [selectedGenre, setSelectedGenre] = React.useState('');

  const handleGenreSelection = (genreValue) => {
    setSelectedGenre(genreValue);
  };

  return (
    <div>
      {genres.map((genre) => (
        <GenreButton
          key={genre.value}
          component="button"
          onClick={() => handleGenreSelection(genre.value)}
          sx={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            '&:hover': {
              backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
          }}
        >
          {genre.name}
        </GenreButton>
      ))}

      {selectedGenre && <GameCard genre={selectedGenre} />}
    </div>
  );
};

export default Home;
