import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const GameCard = ({ genre }) => {
  // Implement your logic to fetch or render different content based on the genre
  // You can use the genre prop to determine the data to display in the card

  // Example content based on genre
  const content = {
    action: {
      name: 'Action Game',
      description: 'This is an action-packed game.',
      image: 'https://example.com/action-image.jpg',
    },
    adventure: {
      name: 'Adventure Game',
      description: 'Embark on an epic adventure.',
      image: 'https://example.com/adventure-image.jpg',
    },
    indie: {
        name: 'Indie Game',
        description: 'This is an indie game.',
        image: 'https://example.com/indie-image.jpg',
    },
    rpg: {
        name: 'RPG Game',
        description: 'This is an RPG game.',
        image: 'https://example.com/rpg-image.jpg',
    },
    simulation: {
        name: 'Simulation Game',
        description: 'This is a simulation game.',
        image: 'https://example.com/simulation-image.jpg',
    },
    sports: {
        name: 'Sports Game',
        description: 'This is a sports game.',
        image: 'https://example.com/sports-image.jpg',
    },
    strategy: {
        name: 'Strategy Game',
        description: 'This is a strategy game.',
        image: 'https://example.com/strategy-image.jpg',
    },
    casual: {
        name: 'Casual Game',
        description: 'This is a casual game.',
        image: 'https://example.com/casual-image.jpg',
    },
    arcade: {
        name: 'Arcade Game',
        description: 'This is an arcade game.',
        image: 'https://example.com/arcade-image.jpg',
    },
    puzzle: {
        name: 'Puzzle Game',
        description: 'This is a puzzle game.',
        image: 'https://example.com/puzzle-image.jpg',
    },
    racing: {
        name: 'Racing Game',
        description: 'This is a racing game.',
        image: 'https://example.com/racing-image.jpg',
    },
    shooter: {
        name: 'Shooter Game',
        description: 'This is a shooter game.',
        image: 'https://example.com/shooter-image.jpg',
    },
    fighting: {
        name: 'Fighting Game',
        description: 'This is a fighting game.',
        image: 'https://example.com/fighting-image.jpg',
    },
    family: {
        name: 'Family Game',
        description: 'This is a family game.',
        image: 'https://example.com/family-image.jpg',
    },
    board: {
        name: 'Board Game',
        description: 'This is a board game.',
        image: 'https://example.com/board-image.jpg',
    },
    card: {
        name: 'Card Game',
        description: 'This is a card game.',
        image: 'https://example.com/card-image.jpg',
    },
    educational: {
        name: 'Educational Game',
        description: 'This is an educational game.',
        image: 'https://example.com/educational-image.jpg',
    },
    platformer: {
        name: 'Platformer Game',
        description: 'This is a platformer game.',
        image: 'https://example.com/platformer-image.jpg',
    },
    massively_multiplayer: {
        name: 'Massively Multiplayer Game',
        description: 'This is a massively multiplayer game.',
        image: 'https://example.com/massively-multiplayer-image.jpg',
    },
  };

  const { name, description, image } = content[genre] || {};

  return (
    <Card>
      <CardMedia component="img" height="140" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GameCard;
