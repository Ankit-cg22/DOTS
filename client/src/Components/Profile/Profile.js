import React, { useEffect } from 'react'
import {Paper , Typography , CircularProgress , Divider , Grid} from '@material-ui/core'
import useStyles from './styles'
import { useDispatch , useSelector } from 'react-redux'
import { getUserInfo } from '../../actions/posts'
import {useParams , useHistory} from 'react-router-dom'
import Post from '../Posts/Post/Post'

export default function Profile({setCurrentId}) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const currentUser = JSON.parse(localStorage.getItem('profile'));
    const { id } = useParams()
    const { postsByUserId , profileUser , isLoading }  = useSelector((state) => state.posts)
    
    useEffect(()=>{
        dispatch(getUserInfo(id))
    } , [])
    console.log(postsByUserId)
    console.log(profileUser)
   
    if(isLoading){
        return <div className={classes.CircularProgressHolder}><CircularProgress/></div>
    }

    return (
        <Grid container className ={classes.mainContainer} >
            <Grid item md={10} xs={12} sm={12} >
                <Typography variant="h6" color="white" className={classes.header}> {profileUser?.name}'s Posts </Typography>
                
                {!postsByUserId?.length ? 
                    <div className={classes.progressHolder}>
                        <Typography>No posts by {profileUser?.name} yet.</Typography>
                    </div>
                :
                    <Grid className ={classes.mainPostsContainer} containter alignItems="stretch" spacing={2}>

                    {postsByUserId?.map( (post) => (
                        <Grid className={classes.postWrapper} key ={post._id } item md={12}  xs ={12} sm={12}>
                            <Post post={post} setCurrentId={setCurrentId}  />
                        </Grid>
                    ))} 
                
                    </Grid>
                }       
            </Grid>
    
            
            <Grid item md={2} xs={12} sm={12} className={classes.widgetContainer}>
                <Paper className={classes.InfoContainer}>
                    <img height= "70px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlQ9DL2jP_heI_mtZXdw8cxNdGunsejk7FQ&usqp=CAU"/>
                    <div className={classes.infoWrapper}>
                        <Typography variant="body2">Name: {profileUser?.name}</Typography>
                        <Typography variant="body2">Email: {profileUser?.email}</Typography>
                    </div>
                </Paper>
            </Grid>
        </Grid>
  )
}
