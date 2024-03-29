import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection : 'column',
    alignItems: 'center',
    justifyContent:"center",

  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  postWrapper:{
    
    width :"80%",
    '@media(max-width:600px)':{
      width:"100%",
    }
  }
}));  