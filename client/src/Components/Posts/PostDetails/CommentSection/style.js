import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    commentsOuter:{
        display:"flex",
        justifyContent:"space-between",
        flexDirection : "column-reverse"
    },
    commentsInner:{
        height : "200px",
        width:"100%",
        overflowY: "scroll",
    },  
    commentInput:{
        width:"100%",
        display:"flex",
        justifyContent : "space-around",
        marginBottom : "1rem"
    },
    submitButton:{
        width:"20%",    
        marginLeft : "0.5rem",
        maxHeight:"50px",
        [theme.breakpoints.down('sm')]: {
            fontSize : "0.7rem"
        }
    },
    commentTopdiv:{
        width:"90%",
        '@media(max-width:600px)':{
            width:"100%",
        },
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",    
        marginButtom:"20px",
    },
    commentBody:{
        width:"90%",
        overflowWrap: 'break-word',
        marginTop:"10px"
    },
    ProfileLink:{
        textDecoration:"none",
        color : "#55AAD1",
        '&:hover':{
          borderBottom:"1px solid #55AAD1"

        },
        '@media(max-width:600px)':{
          fontSize: "1.0rem"
        }
    }
}))