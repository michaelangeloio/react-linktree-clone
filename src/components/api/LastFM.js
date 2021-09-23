//core components
import React from 'react';

//API components
import {useLastFM} from 'use-last-fm';

//mui components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

//common components
import Music from '../../components/common/Music';

const CurrentlyPlaying = () => {
  const lastFM = useLastFM('mangelorivera', process.env.REACT_APP_LAST_FM_API_KEY)

  if (lastFM.status !== 'playing') {
    return <p>Not listening to anything</p>;
  }

  console.log(lastFM)

  return (
    <div>
<Music songTitle = {lastFM.song.name} artist = {lastFM.song.artist} albumArt = {lastFM.song.art} songLink = {lastFM.song.url}/>
   
    </div>
  );
};

export default CurrentlyPlaying;