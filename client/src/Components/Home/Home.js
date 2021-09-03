import React from 'react';
import { Container,  Grow, Grid } from '@material-ui/core';
import Posts from '../Posts/Posts'

import Form from '../Form/Form';



import  { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';



export default function Home() {
    
    const [currentId , setCurrentId] = useState(0);

    const dispatch = useDispatch();
    // const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
      }, [currentId, dispatch]);
    // here we dispatch the action , 
    // we handle this dispatch in the reducer funtion for corresponding stuff



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

                        <Form currentId={currentId}  setCurrentId={setCurrentId} />

                    </Grid>
                        
                    </Grid>
            </Container>
        </Grow>
    )
}
