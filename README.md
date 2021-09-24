# LinkTree React Clone :taco:

Welcome! This is a lil' project of mine to help others get to my various hobbies.. a link tree if you will. :wink: 

Feel free to fork and use it in whatever way you'd like. 

Build process is still the exact same as a normal `create-react-app`. Be sure to `npm install` when forking the repo to make sure you have all the necessary packages. 

## Requirements

    React 17.^
    MUI (formerly Material UI) 5.^

## Credits

- [Material UI](https://github.com/mui-org/material-ui)

- [Use Last FM](https://github.com/alii/use-last-fm)

- [React Copy to Clipboard](https://github.com/nkbt/react-copy-to-clipboard)

## Major dependencies used at the moment

    "@emotion/react": "^11.4.1" 
    "@emotion/styled": "^11.3.0",
    "@mui/icons-material": "^5.0.0",
    "@mui/material": "^5.0.0",
    "@mui/styles": "^5.0.0",
    "react": "^17.0.2",
    "react-copy-to-clipboard": "^5.0.4",
    "use-last-fm": "^0.6.1",

## Displaying live music architecture

This app displays what you're listening to live via a registered LastFM Application + API Key. 

Currently it's using the wrapper from `LastFM`. 

Data is currently being passed through props in the `Music.js` component