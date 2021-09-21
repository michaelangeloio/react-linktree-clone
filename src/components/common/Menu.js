import * as React from 'react';

//mui components
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ComputerIcon from '@mui/icons-material/Computer';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Grid from '@mui/material/Grid';
import {Typography} from '@mui/material';
import Box from '@mui/material/Box';

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
    setmenuItem1] = React.useState(true);

  const handleClick = () => {
    setmenuItem1(!menuItem1);
  };

  return (
    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
      justify="center">
      <Grid item sx={{
        width: 400,
        marginTop: 1
      }}>
        <List >

          <Box
            sx={{
            ...commonStyles,
            borderColor: 'gray'
          }}>
            <ListItemButton
              onClick={handleClick}
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
        width: 400,
     
      }}>
        <List >

          <Box
            sx={{
            ...commonStyles,
            borderColor: 'gray'
          }}>
            <ListItemButton
              onClick={handleClick}
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

    </Grid>
  );
};

export default Menu;