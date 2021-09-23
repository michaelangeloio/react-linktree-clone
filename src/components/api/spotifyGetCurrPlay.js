

//IN DEVELOPMENT FORE FUTURE USE
//PLEASE DISREGARD

import Axios from 'axios';

async function getAPIData(token) {
  try {

    

    const apiData = await Axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    return (apiData)

  } catch (err) {
    console.error(err);
  }

}

export default getAPIData;



// async function getAPIData(token) {
//     try {
  
  
//       const apiData = await Axios.get('https://api.spotify.com/v1/me', {
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + token
//         }
//       })
//       return (apiData)
  
//     } catch (err) {
//       console.error(err);
//     }
  
//   }
  
//   export default getAPIData;
  