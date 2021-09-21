import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    headerAvatar : {
        marginTop: '4%',
        height: 150,
        width: 150,
        '@media (min-width:1200px)': {
          height: 200,
          width: 200
        }
      },
  headerTitle: {
    color: "white",
    marginTop: 20
  }
}));

export default useStyles;


export const headerAvatar = 
    {headerAvatarClass :
    {
        marginTop: '4%',
        height: 150,
        width: 150,
        '@media (min-width:1200px)': {
          height: 200,
          width: 200
        }
      }
    }