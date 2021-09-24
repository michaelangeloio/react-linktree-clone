import React from 'react';
import {useEffect} from 'react';


//common components
import SubMenuItem from './SubMenuItem';

//mui components
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

//mui icons
import ComputerIcon from '@mui/icons-material/Computer';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebIcon from '@mui/icons-material/Web';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import YouTubeIcon from '@mui/icons-material/YouTube';

//styling
import menucss from '../../assets/css/menucss';
import {commonStyles, commonBorderColor} from '../../assets/css/menucss';
import {commonWidthMainMenu, commonSpacingTop} from '../../assets/css/sizingcss';




const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props}/>;
});

function Menu() {

  const [open,
    setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const menuClasses = menucss();

  const [menuItem1,
    setmenuItem1] = React.useState(false);

  const handleMenu1 = () => {
    setmenuItem1(!menuItem1);
  };

  const [menuItem2,
    setmenuItem2] = React.useState(false);

  const handleMenu2 = () => {
    setmenuItem2(!menuItem2);
  };

  const [menuItem3,
    setmenuItem3] = React.useState(false);

  const handleMenu3 = () => {
    setmenuItem3(!menuItem3);
  };

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
    <div>
      <Slide
        direction="left"
        in={start}
        mountOnEnter
        unmountOnExit
        {...(start ? { timeout: 2000 } : {})}>
        <Grid
          container
          spacing={1}
          direction="column"
          alignItems="center"
          justify="center">

          <Grid
            item
            sx={{
            ...commonWidthMainMenu,
            ...commonSpacingTop
          }}>
            <Typography variant="h6" sx={{
              color: "white"
            }}>My Links</Typography>
          </Grid>
          <Grid item sx={commonWidthMainMenu}>
            <List >

              <Box
                sx={{
                ...commonStyles,
                ...commonBorderColor
              }}>
                <ListItemButton onClick={handleMenu1} sx={commonBorderColor}>
                  <ListItemIcon>
                    <ComputerIcon fontSize='large' className={menuClasses.menuIconMain}/>
                  </ListItemIcon>
                  <ListItemText
                    primary=
                    {<Typography variant = "h6" className = {menuClasses.menuMainText}> Technology </Typography>}/> {menuItem1
                    ? <ExpandLess className={menuClasses.menuIconSecondary}/>
                    : <ExpandMore className={menuClasses.menuIconSecondary}/>}
                </ListItemButton>

                <Collapse in={menuItem1} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton
                      component="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://about.michaelangrivera.com"
                      sx={{
                      pl: 4
                    }}>
                      <ListItemIcon>
                        <AccessibilityNewIcon fontSize='large' className={menuClasses.menuIconMain2}/>
                      </ListItemIcon>
                      <ListItemText
                        primary={< Typography variant = "h6" className = {
                        menuClasses.menuMainText
                      } > About Me </Typography>}/>

                    </ListItemButton>
                    <ListItemButton
                      component="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/michaelangrivera"
                      sx={{
                      pl: 4
                    }}>
                      <ListItemIcon>
                        <GitHubIcon
                          sx={{
                          fontSize: 30
                        }}className={menuClasses.menuIconMain2}/>
                      </ListItemIcon>
                      <ListItemText
                        primary={< Typography variant = "h6" className = {
                        menuClasses.menuMainText
                      } > My GitHub </Typography>}/>
                    </ListItemButton>
                  </List>
                  
                  <SubMenuItem handleClick = {handleClick} />

                </Collapse>
              </Box>
            </List>

          </Grid>

          <Grid item sx={commonWidthMainMenu}>

            <List >

              <Box
                sx={{
                ...commonStyles,
                ...commonBorderColor
              }}>
                <ListItemButton onClick={handleMenu2} sx={commonBorderColor}>
                  <ListItemIcon>
                    <DirectionsRunIcon fontSize='large' className={menuClasses.menuIconMain}/>
                  </ListItemIcon>
                  <ListItemText
                    primary=
                    {<Typography variant = "h6" className = {menuClasses.menuMainText}> Fitness & Endurance </Typography>}/> {menuItem1
                    ? <ExpandLess className={menuClasses.menuIconSecondary}/>
                    : <ExpandMore className={menuClasses.menuIconSecondary}/>}
                </ListItemButton>

                <Collapse in={menuItem2} timeout="auto" unmountOnExit>

                  <List component="div" disablePadding>
                    <ListItemButton
                      component="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://instagram.com/michaelangelosweats"
                      sx={{
                      pl: 4
                    }}>
                      <ListItemIcon>
                        <InstagramIcon fontSize='large' className={menuClasses.menuIconMain2}/>
                      </ListItemIcon>
                      <ListItemText
                        primary={< Typography variant = "h6" className = {
                        menuClasses.menuMainText
                      } > michaelangelosweats </Typography>}/>

                    </ListItemButton>
                    <ListItemButton
                      onClick={handleClick}
                      sx={{
                      pl: 4
                    }}>
                      <ListItemIcon>
                        <WebIcon
                          sx={{
                          fontSize: 30
                        }}className={menuClasses.menuIconMain2}/>
                      </ListItemIcon>
                      <ListItemText
                        primary={< Typography variant = "h6" className = {
                        menuClasses.menuMainText
                      } > Fitness Blog </Typography>}/>
                    </ListItemButton>
                    <ListItemButton
                      component="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.strava.com/athletes/49028135"
                      sx={{
                      pl: 4
                    }}>
                      <ListItemIcon>
                        <DoubleArrowIcon
                          sx={{
                          fontSize: 30
                        }}className={menuClasses.menuIconMain2}/>
                      </ListItemIcon>
                      <ListItemText
                        primary={< Typography variant = "h6" className = {
                        menuClasses.menuMainText
                      } > Strava Profile </Typography>}/>
                    </ListItemButton>
                  </List>

                </Collapse>
              </Box>
            </List>

          </Grid>

          <Grid item sx={commonWidthMainMenu}>
            <List >

              <Box
                sx={{
                ...commonStyles,
                ...commonBorderColor
              }}>
                <ListItemButton onClick={handleMenu3} sx={commonBorderColor}>
                  <ListItemIcon>
                    <MusicNoteIcon fontSize='large' className={menuClasses.menuIconMain}/>
                  </ListItemIcon>
                  <ListItemText
                    primary=
                    {<Typography variant = "h6" className = {menuClasses.menuMainText}> Music & Percussion </Typography>}/> {menuItem1
                    ? <ExpandLess className={menuClasses.menuIconSecondary}/>
                    : <ExpandMore className={menuClasses.menuIconSecondary}/>}
                </ListItemButton>

                <Collapse in={menuItem3} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>

                    <ListItemButton
                      component="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://instagram.com/michaelangelodrums"
                      sx={{
                      pl: 4
                    }}>
                      <ListItemIcon>
                        <InstagramIcon fontSize='large' className={menuClasses.menuIconMain2}/>
                      </ListItemIcon>
                      <ListItemText
                        primary={< Typography variant = "h6" className = {
                        menuClasses.menuMainText
                      } > michaelangelodrums </Typography>}/>

                    </ListItemButton>
                    <ListItemButton
                      component="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.youtube.com/user/michaelangelovideos/videos"
                      sx={{
                      pl: 4
                    }}>
                      <ListItemIcon>
                        <YouTubeIcon fontSize='large' className={menuClasses.menuIconMain2}/>
                      </ListItemIcon>
                      <ListItemText
                        primary={< Typography variant = "h6" className = {
                        menuClasses.menuMainText
                      } > My Youtube </Typography>}/>
                    </ListItemButton>
                  </List>
                </Collapse>
              </Box>
            </List>

          </Grid>

        </Grid>

      </Slide>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          sx={{
          width: '100%'
        }}>
          Not available yet!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Menu;