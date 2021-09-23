import React from 'react';
import {useEffect} from 'react';

//mui components
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import LinearProgress from '@mui/material/LinearProgress';

//common components
import Spotify from '../../components/api/LastFM';

//assets
import avatarPhoto from '../../assets/images/avatarPhoto.png';

//styling
import headercss from '../../assets/css/headercss';

const headerAvatar = {
  marginTop: '4%',
  height: 150,
  width: 150,
  '@media (min-width:1200px)': {
    height: 200,
    width: 200
  }
}

const delay = 1

function Header() {

  const headerClasses = headercss();

  const [start,
    setStart] = React.useState(false);

  useEffect(() => {
    let timer1 = setTimeout(() => setStart(true), 1);

    // this will clear Timeout when component unmount like in willComponentUnmount
    // and show will not change to true
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (

    <Grow
      in={start}
      style={{
      transformOrigin: '0 0 0'
    }}
      {...(start ? { timeout: 2000 } : {})}>
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justify="center"
        style={{}}>
        <Grid item>
          <Avatar src={avatarPhoto} sx={{
            ...headerAvatar
          }}/>

        </Grid>
        <Grid item xs={3}>
          <Typography className={headerClasses.headerTitle} variant="h3">
            Michael Angelo Rivera
          </Typography>
        </Grid>
        <Grid item>
          <LinearProgress color="success" sx={{
            width: 400
          }}/>
        </Grid>
        <Grid item xs={3}>
          <Spotify/>
        </Grid>
      </Grid>
    </Grow>
  )

}

export default Header;