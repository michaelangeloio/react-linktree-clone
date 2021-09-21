// Using theme in styled-component
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
// import the theme here
import theme  from './theme';

const SizedAvatar =  styled(Avatar)(({ theme }) => ({
root: {
   
    width: 1000,
    height: 1000
    
},
}));

export default SizedAvatar;