import React from 'react';
import { Button ,Container,  Grow, Grid } from '@material-ui/core';
import Posts from '../Posts/Posts'
import { Link } from 'react-router-dom';

// import AddIcon from '@material-ui/icons/Add';

export default function Home( {  currentId , setCurrentId }) {
   
    return (
        <Grow in>
            <Container >
                <Grid container alignItems="stretch" justifyContent="space-between"  spacing={3}  >
                    <Grid item xs={12} sm={7}>
                        {/* xs : xtra small , take whole space in xs devices */}
                        {/* sm : on small devices , take 7 out of 12 spaces */}

                        <Posts  setCurrentId = {setCurrentId}  />    

                    </Grid>
                    
                    <Grid item xs={12} sm={4}>

                        <Button component={Link} to="/create"  color ="secondary" variant="contained">
                            Place a Dot   
                        </Button>

                    </Grid>
                        
                </Grid>
            </Container>
        </Grow>
    )
}
