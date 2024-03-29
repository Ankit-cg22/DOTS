import { makeStyles } from "@material-ui/core";

export default makeStyles({
    addButton:{
        display:"absolute",
        bottom : "0",
        left:"0",
        
    },
    signMsg:{
        pointerEvents:"none",
        
        
    },
    searchBox:{
        margin:"1rem 0rem",
        height:"fit-content ",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-around",
        padding:"0.5rem",
        fontSize:"0.5rem",
        '@media (max-width:600px)': {
            width:"90%",
        }
        
    },
    pagination:{
        width:"50%",
        margin:"0px auto",
        '@media(max-width:600px)':{
            width:"90%",
        }
    },
    searchInput : {
        margin:"0.2rem"
    },
    mainContainer:{
        
        width:'100%',
        maxWidth: "1400px",
        margin: "auto",
        '@media (max-width:780px)': {
            display : "flex",
            flexDirection : "column",
        },
    },
    widgetContainer:{
        padding: "10px 10px",
        width:"100%",
       
        textAlign : "center",
        '@media (max-width:780px)': {
            display : "flex",
            flexDirection : "column",
            alignItems:"center",
            justifyContent:"center",
           
        },
        margin: "0 auto"  
    }

})