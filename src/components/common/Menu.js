import * as React from 'react';
import {useEffect} from 'react';

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

//mui icons
import ComputerIcon from '@mui/icons-material/Computer';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

//styling
import menucss from '../../assets/css/menucss';

const commonStyles = {

  border: 3,
  elevation: 10,
  borderRadius: '16px'
};

function Menu() {

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

        <Grid item sx={{
          width: 400,
          marginTop: 2
        }}>
          <Typography variant="h6" sx={{
            color: "white"
          }}>LINKS</Typography>
        </Grid>
        <Grid item sx={{
          width: 400
        }}>
          <List >

            <Box
              sx={{
              ...commonStyles,
              borderColor: 'gray'
            }}>
              <ListItemButton
                onClick={handleMenu1}
                sx={{
                borderColor: 'gray'
              }}>
                <ListItemIcon>
                  <ComputerIcon fontSize='large' className={menuClasses.menuIconMain}/>
                </ListItemIcon>
                <ListItemText
                  primary=
                  {<Typography variant = "h6" className = {menuClasses.menuMainText}> Technology </Typography>}/> {menuItem1
                  ? <ExpandLess/>
                  : <ExpandMore/>}
              </ListItemButton>

              <Collapse in={menuItem1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{
                    pl: 4
                  }}>
                    <ListItemIcon>
                      <StarBorder/>
                    </ListItemIcon>
                    <ListItemText primary="Starred"/>
                  </ListItemButton>
                </List>
              </Collapse>
            </Box>
          </List>

        </Grid>

        <Grid item sx={{
          width: 400
        }}>
          <List >

            <Box
              sx={{
              ...commonStyles,
              borderColor: 'gray'
            }}>
              <ListItemButton
                onClick={handleMenu2}
                sx={{
                borderColor: 'gray'
              }}>
                <ListItemIcon>
                  <DirectionsRunIcon fontSize='large' className={menuClasses.menuIconMain}/>
                </ListItemIcon>
                <ListItemText
                  primary=
                  {<Typography variant = "h6" className = {menuClasses.menuMainText}> Fitness & Endurance </Typography>}/> {menuItem1
                  ? <ExpandLess/>
                  : <ExpandMore/>}
              </ListItemButton>

              <Collapse in={menuItem2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{
                    pl: 4
                  }}>
                    <ListItemIcon>
                      <StarBorder/>
                    </ListItemIcon>
                    <ListItemText primary="Starred"/>
                  </ListItemButton>
                </List>
              </Collapse>
            </Box>
          </List>

        </Grid>

        <Grid item sx={{
          width: 400
        }}>
          <List >

            <Box
              sx={{
              ...commonStyles,
              borderColor: 'gray'
            }}>
              <ListItemButton
                onClick={handleMenu3}
                sx={{
                borderColor: 'gray'
              }}>
                <ListItemIcon>
                  <MusicNoteIcon fontSize='large' className={menuClasses.menuIconMain}/>
                </ListItemIcon>
                <ListItemText
                  primary=
                  {<Typography variant = "h6" className = {menuClasses.menuMainText}> Music & Percussion </Typography>}/> {menuItem1
                  ? <ExpandLess/>
                  : <ExpandMore/>}
              </ListItemButton>

              <Collapse in={menuItem3} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{
                    pl: 4
                  }}>
                    <ListItemIcon>
                      <StarBorder/>
                    </ListItemIcon>
                    <ListItemText primary="Starred"/>
                  </ListItemButton>
                </List>
              </Collapse>
            </Box>
          </List>

        </Grid>

      </Grid>
    </Slide>
  );
};

export default Menu;