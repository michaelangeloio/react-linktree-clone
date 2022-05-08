import React from 'react';
import {useEffect, useState} from 'react';

//mui components
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Tooltip from "@mui/material/Tooltip";
import Box from '@mui/material/Box';

//mui icons
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

//common components
import LastFM from '../../components/api/LastFM';
import {CopyToClipboard} from "react-copy-to-clipboard";

//styling
import headercss from '../../assets/css/headercss';
import {commonWidthDivider} from '../../assets/css/sizingcss';

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
  }, []);
  const [anchorEl,
    setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open
    ? 'simple-popover'
    : undefined;

  const [copiedText,
    setCopiedText] = useState();

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
          <Avatar src={`https://media.michaelangrivera.com/michaelangrivera-links/avatar.png`} sx={{
            ...headerAvatar
          }}/>

        </Grid>

        <Grid item>
          <Typography className={headerClasses.headerTitle} variant="h3">
            Michael Angelo Rivera
          </Typography>
        </Grid>

        <Grid item>
          <LinearProgress color="success" sx={commonWidthDivider}/>
        </Grid>
        <Grid item>
          <Grid item container>
            <IconButton
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/michaelangrivera">
              <InstagramIcon
                sx={{
                fontSize: "30px",
                color: "white",
                margin: .2
              }}/>
            </IconButton>

            <IconButton onClick={handleClick}>
              <MailOutlineIcon
                sx={{
                fontSize: "30px",
                color: "white",
                margin: .2
              }}/>
            </IconButton>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
              transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}>
              <CopyToClipboard
                text={"ni ni-active-40"}
                onCopy={() => setCopiedText("ni ni-active-40")}>
                <Tooltip
                  title={copiedText === "ni ni-active-40"
                  ? "This was Copied!"
                  : "Copy To Clipboard"}
                  placement="top">
                  <Box>
                    <Typography
                      sx={{
                      backgroundColor: "gray",
                      color: "white",
                      padding: 1.01,
                      radius: "50%"
                    }}>
                      mar@michaelangrivera.com
                    </Typography>
                  </Box>
                </Tooltip>
              </CopyToClipboard>

            </Popover>

            <IconButton
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/michaelangelorivera/">
              <LinkedInIcon
                sx={{
                fontSize: "30px",
                color: "white",
                margin: .2
              }}/>
            </IconButton>
            <IconButton
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/michaelangrivera">
              <GitHubIcon
                sx={{
                fontSize: "30px",
                color: "white",
                margin: .2
              }}/>
            </IconButton>

          </Grid>
        </Grid>
        <Grid item xs={3}>
          <LastFM/>
        </Grid>
      </Grid>

    </Grow>

  )

}

export default Header;