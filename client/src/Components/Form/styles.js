import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    width:"60%",
    height:"fit-content",
    display:"flex",
    margin:"0px auto ",
    '@media(max-width:600px)' :{
      width:"90%",
    }
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    display:"flex", 
    alignItems:"center"
  },
  buttonSubmit: {
    marginBottom: 10,
  },

  modalBox:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60vw",
    height: "90vh",
    
    // height:"fit-content",
    '@media(max-width:700px)':{
      width:"95vw",
      height: "90vh",
    },
    backgroundColor: 'white',
    borderRadius:"1rem",
    boxShadow: 24,
    p: 4,
   border:"none",
   outline:"none",
   overflow:"hidden",
  },
  closeIcon:{
    cursor:"pointer" ,
  },
  infoArea:{
    width:"100%",
    backgroundColor : "#002984",
    color : "white",
    height:"12%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
     

  },
  infoAreaSub:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    width:"90%",
  },
  locationButton:{
    fontSize:"0.8rem",
    margin:"10px",
  },
  loaderWrapper:{
    textAlign:"center",
    height:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  mapContainer:{
    height:"70%",
    borderBottom : "1px solid gray",
    '@media(max-width:700px)':{
      height: "60%",
    },
  },
  modalAction:{
    height:"20%",
    display:"flex",
    flexDirection:"row",
    '@media(max-width:700px)':{
      display:"flex",
      flexDirection:"column",
      height:"30%"
    },
  },
  locSearchBox:{
    width:"60%",
    padding:"10px",
    display:"flex",
    justifyContent : "center",
    alignItems:"center",
    '@media(max-width:700px)':{
      width:"95%"
    },
    
   
  },
  locSearchBoxSub:{
    width:"90%",
    position:"relative",
  },
  locSearchBoxInput:{
    padding:"1px"
  },
  ActionButtons:{
    width:"40%",
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    '@media(max-width:700px)':{
      width:"100%"
    },
  },
  searchLoaderWrapper:{
    height:"100%",
    widht:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  myLocationButton:{
    position:"absolute",
    top:"20%",
    right:"3%",
  }
}));