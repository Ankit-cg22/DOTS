import React from 'react'
import {Grid , CircularProgress , Typography} from '@material-ui/core'
import Post from './Post/Post'
import LoadScreen from '../LoadScreen/LoadScreen';
// here we need the data about the posts 
// we pull it from the store
// for that we make use of useSelector

import { useSelector } from 'react-redux';

import useStyles from './styles'

export default function Posts( {setCurrentId }) {
    const classes = useStyles();

    // useSelector : pulling data from global store
    const { posts , isLoading} = useSelector( (state) => state.posts )
    console.log(posts)

    if(isLoading)
    {
        return(
            <LoadScreen/>
        )
    }

    return (
        !posts?.length ? 
            <div style={{width:"100%" , display:"flex" , alignItems:"center" , justifyContent:"center"}}>
                <Typography variant="h5">No posts available</Typography>
            </div>: (
            <Grid className ={classes.mainContainer} containter alignItems="stretch" spacing={2}>

                {posts.map( (post) => (
                    <Grid className={classes.postWrapper} key ={post._id } item md={12}  xs ={12} sm={12}>
                        <Post post={post} setCurrentId={setCurrentId}  />
                    </Grid>
                ))
                   
                }
            </Grid>
        )
    )
}
