import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    media: {
        borderRadius: '20px',
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
        [theme.breakpoints.down('sm')]: {
          marginLeft: 0,
        },
      },
      recommendedPosts: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
      },
      loadingPaper: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
      },
      topDiv:{
        
        width : "100%",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
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

        }
      }
}))