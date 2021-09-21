// import logo from './logo.svg'; import './App.css';

import React from 'react';
import {useEffect} from 'react';

//mui components
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Fade from '@mui/material/Grow';

//components
import Header from './components/common/Header';
import Menu from './components/common/Menu';

//styling
import theme from './assets/css/theme';


const delay = 1;

function App() {

  

  return (
    <div className="App">

      <ThemeProvider theme={theme}>
        <CssBaseline/>
       
          <Header/>
          <Menu/>

      </ThemeProvider>

    </div>
  );
}

export default App;
