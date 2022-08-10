import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 0,
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    '@media (max-width:479px)': {
      padding: '10px 0px',
    },
    width:"100%"
  },
  heading: {
    color: 'black',
    textDecoration: 'none',
    fontSize: "5vw",
    height:"100%",
    margin:"auto auto",
    '@media (max-width:479px)': {
      fontSize: "8vw",
    },
  },
  image: {
    marginLeft: '15px',
    height:"5vw",
    '@media (max-width:479px)': {
      height:"8vw",
    }
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    flexDirection : 'row',
    justifyContent: 'space-between',
    width:"200px"
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',

    alignItems: 'center',
  },
  purple: {
    
    backgroundColor: yellow[100],
  },
  loginButton:{
    fontSize: "1.2vw",
  }
}));