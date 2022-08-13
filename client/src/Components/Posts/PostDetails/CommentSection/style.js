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
        overflowY: "auto",
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
    
}))