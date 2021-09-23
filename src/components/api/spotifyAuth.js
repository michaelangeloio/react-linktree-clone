
//IN DEVELOPMENT FORE FUTURE USE
//PLEASE DISREGARD

import Axios from 'axios';

async function postAuth() {
  try {

    const paramsObj = {
      grant_type: 'client_credentials', //gave the values directly for testing
      client_secret: '5edbeef4f1674ab5be91f1e9f2bce175',
      client_id: '5e344f3271ca44d3b296650b162dd25d'
    }

    const params = new URLSearchParams(paramsObj);

    const authData = await Axios.post('https://accounts.spotify.com/api/token', params.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    return (authData)

  } catch (err) {
    console.error(err);
  }

}

export default postAuth;
