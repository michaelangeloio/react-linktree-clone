import * as React from 'react';

//mui components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';


//styling
import { commonSpacingTop2 } from '../../assets/css/sizingcss';

// assets
import musicTile from '../../assets/images/musicTile.png'


export default function MediaControlCard(props) {

  function songTitleETL(title) {
    if (title.length > 30) {
      return (title.substring(0, 30) + "...")
    } else {
      return (title)
    }
  };

  function musicTileETL (tile) {
    if (tile.includes("2a96cbd8b46e442fc41c2b86b821562f") ) {
        return (musicTile)
    }
    else {
        return (tile)
    }
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{}}>
      <Grid item sx={{
        marginRight: 30,
        ...commonSpacingTop2
      }}>
        <Typography align="right" color="white" fontSize={12}>
          {props.subtext}
        </Typography>
      </Grid>
      <Grid item sx={{}}>
        <CardActionArea component="a" href={props.songLink}>
          <Card
            sx={{
            display: 'flex',
            width: 350,
            height: 80,
            backgroundColor: '#333333'
          }}>
            <CardMedia
              component="img"
              sx={{
              width: 80,
              height: 80
            }}
              image={musicTileETL(props.albumArt)}
              alt="Live from space album cover"/>
            <CardContent >
              <Grid container justify="space-between" alignItems="left" direction="column">
                <Grid item align="left">
                  <Typography
                    sx={{
                    color: "white",
                    fontSize: 15
                  }}>
                    {songTitleETL(props.songTitle)}
                  </Typography>
                </Grid>
                <Grid item align="left">
                  <Typography variant="subtitle1" color="white" component="div">
                    {props.artist}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>

          </Card>
        </CardActionArea>
      </Grid>
    </Grid>

  );
}
