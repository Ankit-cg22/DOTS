import { makeStyles } from "@material-ui/core";

export default makeStyles({
    modalBox:{
        position: 'absolute' ,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'white',
        boxShadow: 24,
        height:"200px",
        p: 4,
        outline:"none",
        borderRadius : "1rem",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        '@media(max-width:600px)':{
          height:"150px",
          width:"90vw"
        }
      },
      deleteModalContainer:{
        width:"fit-content",
        
        height:"50%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        alignItems:"center",
      },
      deleteActionButtons:{
    
        width:"100%",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
      },
      deleteYesButton:{
        width:"45%",
      },
      deleteNoButton:{
        width:"45%",
      }
})