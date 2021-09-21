import React from 'react';
import {useEffect} from 'react';

//mui components 
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';

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
    let timer1 = setTimeout(() => setStart(true), delay);

    // this will clear Timeout when component unmount like in willComponentUnmount
    // and show will not change to true
    return () => {
      clearTimeout(timer1);
    };
  },

  []);

  return (

    <Grow
      in={start}
      style={{
      transformOrigin: '0 0 0'
                                }}
      {...(start ? { timeout: 1000 } : {})}>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justify="center"
        style={{}}>
        <Grid item >
          <Avatar
            src={avatarPhoto}
            sx={{...headerAvatar}}/>

        </Grid>
        <Grid item xs={3}>
          <Typography className={headerClasses.headerTitle} variant="h3">
            Michael Angelo Rivera
          </Typography>
        </Grid>
      </Grid>
    </Grow>
  )

}

export default Header;