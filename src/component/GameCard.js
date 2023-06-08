import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const GameCard = ({ game = {} }) => {
  const { background_image, name, description_raw } = game;

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={background_image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description_raw}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GameCard;
