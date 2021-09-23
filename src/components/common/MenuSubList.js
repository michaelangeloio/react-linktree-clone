import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Paper from '@mui/material/Paper';
import youtubeLogo from '../../assets/images/youtube-logo.png';

export default function ActionAreaCard() {
  return (
      <Paper sx = {{maxWidth : 200 }}elevation = {20}>
    <Card sx={{ elevation : 10}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={youtubeLogo}
          alt="green iguana"
        />
        <CardContent sx = {{backgroundColor : "#383838"}}>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card></Paper>
  );
}
