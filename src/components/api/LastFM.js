//core components
import React from 'react';

//API components
import {useLastFM} from 'use-last-fm';

//mui components

//common components
import Music from '../../components/common/Music';

const CurrentlyPlaying = () => {
  const lastFM = useLastFM('mangelorivera', process.env.REACT_APP_LAST_FM_API_KEY)

  if (lastFM.status !== 'playing') {
    return <div>
      <Music
        songTitle={"Good Time"}
        artist={"Owl City"}
        albumArt={"https://lastfm.freetls.fastly.net/i/u/300x300/4747d23169c04222a595cfb2602e4484.png"}
        songLink={"https://www.last.fm/music/Owl+City/_/Good+Time"}
        subtext={"Fav song right now:"}/>

    </div>;
  }

  console.log(lastFM)

  return (
    <div>
      <Music
        songTitle={lastFM.song.name}
        artist={lastFM.song.artist}
        albumArt={lastFM.song.art}
        songLink={lastFM.song.url}
        subtext={"Currently playing..."}/>

    </div>
  );
};

export default CurrentlyPlaying;