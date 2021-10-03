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
    width:"100%"
  },
  heading: {
    color: 'black',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
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
    flexDirection : 'column',
    alignItems: 'center',
  },
  purple: {
    
    backgroundColor: yellow[100],
  },
}));