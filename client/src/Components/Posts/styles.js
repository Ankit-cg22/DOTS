import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection : 'column',
    alignItems: 'center',
    // flexWrap :"wrap",

  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  postWrapper:{
    
    width :"80%"
  }
}));  