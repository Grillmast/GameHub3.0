import React, { useState } from 'react';
import GameCardContainer from '../containers/GameCardContainer';
import Button from '@mui/material/Button';
import Header from './Header';
import { alpha, styled, useTheme } from '@mui/material/styles';

const genres = [
  { name: 'Action', value: 'action' },
  { name: 'Adventure', value: 'adventure' },
  { name: 'Arcade', value: 'arcade' },
  { name: 'Board Games', value: 'board-games' },
  { name: 'Card', value: 'card' },
  { name: 'Educational', value: 'educational' },
  { name: 'Family', value: 'family' },
  { name: 'Fighting', value: 'fighting' },
  { name: 'Indie', value: 'indie' },
  { name: 'Massively Multiplayer', value: 'massively-multiplayer' },
  { name: 'Puzzle', value: 'puzzle' },
  { name: 'Racing', value: 'racing' },
  { name: 'RPG', value: 'role-playing-games-rpg' },
  { name: 'Shooter', value: 'shooter' },
  { name: 'Simulation', value: 'simulation' },
  { name: 'Sports', value: 'sports' },
  { name: 'Strategy', value: 'strategy' },
  { name: 'Platformer', value: 'platformer'},
  { name: 'Casual', value: 'casual' },
];

const GenreButton = styled(Button)(({ theme }) => ({
  borderRadius: 20,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const Home = () => {
  const theme = useTheme();
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenreSelection = (genreValue) => {
    setSelectedGenre(genreValue);
  };

  return (
    <div>
      <Header />
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

      {selectedGenre && <GameCardContainer genre={selectedGenre} />}
    </div>
  );
};

export default Home;
