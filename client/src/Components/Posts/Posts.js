import React from 'react'
import {Grid , CircularProgress} from '@material-ui/core'
import Post from './Post/Post'

// here we need the data about the posts 
// we pull it from the store
// for that we make use of useSelector

import { useSelector } from 'react-redux';

import useStyles from './styles'

export default function Posts( {setCurrentId }) {
    const classes = useStyles();

    // useSelector : pulling data from global store
    const posts = useSelector( (state) => state.posts )
    console.log(posts)

    return (
        !posts.length ? <CircularProgress/>: (
            <Grid className ={classes.mainContainer} containter alignItems="stretch" spacing={3}>

                {posts.map( (post) => (
                    <Grid key ={post._id } item  xs ={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}  />
                    </Grid>
                ))
                   
                }
            </Grid>
        )
    )
}
