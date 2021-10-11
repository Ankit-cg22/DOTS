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
        fontSize:"0.5rem"
        
    },
    pagination:{
        width:"50%",
        margin:"0px auto"
    },
    searchInput : {
        margin:"0.2rem"
    }

})