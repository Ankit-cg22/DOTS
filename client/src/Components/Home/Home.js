import React from 'react';
import { Button ,Container,  Grow, Grid } from '@material-ui/core';
import Posts from '../Posts/Posts'
import { Link } from 'react-router-dom';
import AddBoxIcon from '@material-ui/icons/AddBox';
// import AddIcon from '@material-ui/icons/Add';

import useStyles from './styles'

export default function Home( {  currentId , setCurrentId }) {
   const classes = useStyles();
   const user = JSON.parse(localStorage.getItem('profile'));
    return (

        <Grid container >
            <Grid item md={10} xs={10} sm={11} >
                {/* xs : xtra small , take whole space in xs devices */}
                {/* sm : on small devices , take 7 out of 12 spaces */}
                <Posts  setCurrentId = {setCurrentId}  />
                
            </Grid>
            
            <Grid item md={2} xs={2} sm={1}>
                
                    {user?.result?.name?
                        <Button className = {classes.addButton} component={Link} to="/create"  color ="secondary" variant="contained">
                            <AddBoxIcon/>
                        </Button>
                    :
                        <Button className = {classes.signMsg} color ="secondary" variant="contained">
                            <p> Log in to place DOTS </p>
                        </Button> 
             
                    }   
                

                        
                
            </Grid>
        </Grid>
    
    )
}
