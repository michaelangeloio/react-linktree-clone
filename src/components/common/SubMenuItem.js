import React from 'react';


//mui components
import Grid from '@mui/material/Grid';
import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';


//mui icons
import PetsIcon from '@mui/icons-material/Pets';
import InsertLinkIcon from '@mui/icons-material/InsertLink';


//styling
import menucss from '../../assets/css/menucss';
import {commonWidthMainMenu} from '../../assets/css/sizingcss';

// import ActionAreaCard from './MenuSubList'; assets
import sheetscienceLogo from '../../assets/images/sheetscience-logo.png';




function SubMenuItem (props) {

    const menuClasses = menucss();

return (
    <>

<Grid
                    item
                    sx={{
                    marginTop: 1,
                    marginBottom: 2
                  }}>
                    <Divider >
                      <Chip
                        label={< Typography sx = {{fontSize: 18}}className = {
                        menuClasses.menuMainText
                      } > My Apps </Typography>}/>
                    </Divider>
                  </Grid>
                  <Grid container justify="center">
                    <Grid item sx={{
                      marginLeft: 15
                    }}></Grid>
                  </Grid>

                  <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={3}
                    sx={{
                    marginTop: 1,
                    marginBottom: 2,
                    ...commonWidthMainMenu
                  }}>
                    <Box
                      component="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/michaelangrivera/react-linktree-clone"
                      sx={{
                      textDecoration: 'none',
                      '&:hover': {
                        opacity: [0.9, 0.8, 0.7]
                      }
                    }}>
                      <Grid container item justify="center">
                        <InsertLinkIcon fontSize="large" className={menuClasses.menuIconMain}/>
                        <Typography
                          variant="h6"
                          sx={{
                          marginLeft: 1
                        }}className={menuClasses.menuMainText}>
                          Linktree Clone
                        </Typography>
                      </Grid>
                    </Box>
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={3}
                    sx={{
                    marginTop: 1,
                    marginBottom: 2,
                    ...commonWidthMainMenu
                  }}>
                    {/* <Box
                      sx={{
                      '&:hover': {
                        opacity: [0.9, 0.8, 0.7]
                      }
                    }}
                      onClick={props.handleClick}>
                      <Avatar src={sheetscienceLogo}/>
                      <Typography variant="h6" className={menuClasses.menuMainText}>
                        SheetScience
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                      '&:hover': {
                        opacity: [0.9, 0.8, 0.7]
                      }
                    }}
                      onClick={props.handleClick}>
                      {< PetsIcon fontSize = 'large' sx = {{color: "#FFA500"}}/>}
                      <Typography variant="h6" className={menuClasses.menuMainText}>
                        PetKick
                      </Typography>
                    </Box> */}

                  </Stack>

                  
                  </>
)
}


export default SubMenuItem;