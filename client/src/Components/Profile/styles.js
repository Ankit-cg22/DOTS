import { makeStyles } from "@material-ui/core";

export default makeStyles( (theme) => ({
    InfoContainer:{
        padding : "20px 10px",
        fontSize : "0.8rem",
        marginBottom: "10px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent:"center",
        alignItems:"center",
        margin:"auto",
        '@media(min-width:600px) and (max-width:900px)':{
            width:"50%",
        },
    },
    mainContainer:{
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
          flexWrap: 'wrap',
          flexDirection: 'column-reverse',
        },
        
    },
    infoWrapper:{
        width:"fit-content",
        margin:"auto",
    
    },
    mainPostsContainer:{
        display: 'flex',
        flexDirection : 'column',
        alignItems: 'center',
       
    },
    postWrapper:{
        width :"80%",
 
        display : "flex",
        justifyContent:"center",
        alignItems:"center",
    },
    header:{
        margin:"auto",
        width:"fit-content",
    },
    progressHolder:{
        marginTop:"10px",
        width:"fit-content",
        margin: "auto"
    },
    CircularProgressHolder:{
        width:"100%",
        display : "flex",
        alignItems:"center",
        justifyContent:"center",
     
    }
   
}));