// import logo from './logo.svg'; import './App.css';

import React from 'react';
import {useEffect, useState} from 'react';

//mui components
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Fade from '@mui/material/Grow';

//components
import Header from './components/common/Header';
import Menu from './components/common/Menu';

//styling
import theme from './assets/css/theme';

import postAuth from './components/api/spotifyAuth';
import getAPIData from './components/api/spotifyGetCurrPlay';



function App() {

  const [authData,
    setauthData] = React.useState({hits: []});
  const [authDataloaded,
    setauthLoaded] = React.useState(false);

  const handauthDataLoad = (data) => {
    console.log('loading data')
    setauthData(data);
    setauthLoaded(true);
  }


  const [apiData,
    setapiData] = React.useState({hits: []});
  const [apiDataLoaded,
    setapiDataLoaded] = React.useState(false);

  const handapiDataLoad = (data) => {
    console.log('loading data')
    setapiData(data);
    setapiDataLoaded(true);
  }

  useEffect(() => {

    async function loadContent() {
      const auth = await postAuth();
      console.log(auth);
      // console.log(auth.data.access_token)
      // handauthDataLoad(auth.data);

      // const api = await getAPIData(auth.data.access_token)
      // console.log(api)
      
    }
    // this will clear Timeout when component unmount like in willComponentUnmount
    // and show will not change to true

    loadContent();

  }, []);

 
  

  return (
    <div className="App">

      <ThemeProvider theme={theme}>
        <CssBaseline/>

        <Header/> {authDataloaded && authData.access_token}

        <Menu/>

      </ThemeProvider>

    </div>
  );
}

export default App;
