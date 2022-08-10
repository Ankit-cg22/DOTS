import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    // height:"35%",
    
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
    
    '@media (max-width:700px)': {
      paddingTop: '48%',
    },
    '@media (max-width:600px)': {
      paddingTop: '56.25%',
    },
    '@media (min-width:700px)': {
      paddingTop: '56.25%',
      width : "45%" ,
      height : '100%',
    },
    
    
  },
  postInfo: {
    '@media (min-width:700px)': {
      padding: "20px",
      width:"60%",
      minHeight : "100%",
      
    },
    '@media (max-width:700px)': {
        width:"100%",
        minHeight : "100%",
        
    }
    
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '1rem',
    
    '@media (max-width:700px)': {
      flexDirection: 'column',
      height: '80vw',
      justifyContent: 'space-between',
      width:"80%",
      position: 'relative',
    },
  
    '@media (min-width:700px)': {
      width:'100%',
      maxHeight : "270px" ,
    },
      margin:'1rem',
    '@media (max-width:600px)': {
      height : "95vw",
      
    },
  },
  overlay: {
    
    '@media (max-width:700px)': {
      position: 'absolute',
      top: '-30px',
      color: 'white',
      
      width:"95%",
      padding:"0px 5px ",
      fontSize: "1.1rem",
      display :"flex" ,
      justifyContent: "space-between",
      textAlign : "center",
    },
    '@media (min-width:700px)': {
      width : "40%" ,
      display :"flex" ,
      justifyContent: "space-between",
      textAlign : "center",
    },
  },
  overlayWrapper : {
    '@media (min-width:700px)': {
      
      display : "flex",
      justifyContent:"space-between",
      maxHeight: "10%",
      minHeight: "10%",
      
    },
    width:"100%",
    
    
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 0px',
    '@media (max-width:700px)':{
      paddingLeft : "10px"
    }

  },
  title: {
    
    '@media (max-width:700px)':{
      paddingLeft:"10px",
      padding: '10px 0px',
    },
    '@media (max-width:600px)':{
      padding: '5px 5px',
    }
  },
  cardActions: {
    padding: '0 0px 8px 0px',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (min-width:700px)': {
      height : "15%",
    },

  },
  cardAction: {
    '@media (max-width:700px)' :{
      display: 'block',
      textAlign: 'initial',
      minHeight : "50%",
      maxHeight: "50%",
      width : "100%",
    
    },
    '@media (min-width:700px)': {
      display : "flex" ,
      flexDirection : "column",
      minHeight : "85%",
      maxHeight: "85%",
      width : "100%",
      alignItems: "flex-start",
      justifyContent:"space-between",
    },
    
  },
  imageD: {
    height:'100px'
  },
  description:{
    '@media (min-width:700px)': {
      textAlign:"left",
      padding : 0
    },
    '@media (max-width:600px)': {
      paddingLeft : "10px",
      paddingTop:"0px",
      maxHeight:"50%",
    }
  },
  visitLink:{
    textDecoration:"none",
    color:"white",
    padding:"0",
    maxHeight:"25px",
    widht:"fit-content"
  },
  visitButton:{
    marginRight : "3px"
  },
  authorButtons:{
    '@media (max-width:700px)': {
      width:"40%",
      display:"flex",
      paddingRight:"2px"
    }
  }
});