import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    media: {
        borderRadius: '15px',
        objectFit: 'cover',
        width: '100%',
        maxHeight: '600px',
      
      },
      card: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
          flexWrap: 'wrap',
          flexDirection: 'column-reverse',
        },
      },
      section: {
        borderRadius: '20px',
        margin: '10px',
        flex: 1,
        
      },
      imageSection: {
        marginLeft: '20px',
        width:"30%",
        [theme.breakpoints.down('sm')]: {
          marginLeft: 0,
          width:"100%",
        },
        borderRadius:"15px",
      },
     
      loadingPaper: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
      },

      visitLink:{
        textDecoration:"none",
        color:"white",
      },
      profileNameLink:{
        textDecoration:"none",
        color : "#55AAD1",
        '&:hover':{
          borderBottom:"1px solid #55AAD1"

        },
        '@media(max-width:600px)':{
          fontSize: "1.0rem"
        }
      },
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
      },
      mainPaper:{
        width:"96%",
        maxWidth:"1400px",
        padding: '20px', 
        borderRadius: '15px',
        margin:"auto",
        '@media(max-width:600px)':{
          width:"94%",
          padding: '10px', 
        },
        

      },
      authorName:{
        '@media(max-width:600px)':{
          fontSize: "1.0rem"
        }
      },
      createdAt:{
        '@media(max-width:600px)':{
          fontSize: "1.0rem"
        },
        marginLeft:"15px"
      },
    
      postTitle:{
        '@media(max-width:600px)':{
          fontSize: "1.8rem"
        },
        marginTop:"30px",
        marginButtom:"30px",
      },
      postInfo:{
        display : "flex",
        justifyContent:"space-between",
        alignItems:"center",
        minWidth:"40%",
        width:"fit-content",
        right:"0",
        '@media(max-width:600px)':{
          minWidth:"100%"
        },
        position:"absolute",
        '@media(min-width:600px)':{
          maxWidth:"400px",
        },
        
      },
      postInfoContainer:{
        position:"relative",
      },
      cardActions:{
        
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        
      },
      tagLink:{
        textDecoration:"none",
        color : "#55AAD1",
        '&:hover':{
          borderBottom:"1px solid #55AAD1"

        },
        '@media(max-width:600px)':{
          fontSize: "1.0rem"
        },
        marginRight:"5px",
        cursor:"pointer"
      }
}))