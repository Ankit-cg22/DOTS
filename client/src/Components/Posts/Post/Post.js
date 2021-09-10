import React, {useEffect , useState} from 'react'
import useStyles from './styles'
import {Grid ,Card , CardActions , CardContent, CardMedia ,Button , Typography  } from '@material-ui/core'

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { deletePost , updateLikes } from '../../../actions/posts';
import { Link } from 'react-router-dom';

export default function Post( {post , setCurrentId}) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const currentUser = JSON.parse(localStorage.getItem('profile'));

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>

            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>

        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
        
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
        </CardContent>
        <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">
                {post.tags.map((tag) => `#${tag} `)}
            </Typography>
        </div>

        <CardActions className={classes.cardActions}>
            <Button disabled = { !currentUser?.result } size="small" color="primary" onClick={() => dispatch(updateLikes(post._id))}>
                <ThumbUpAltIcon fontSize="small" /> : {post.likes.length} 
            </Button>

            {( currentUser?.result?._id === post?.author) &&( // visible only if current user is creator of the post
                 <Grid >
    
                 <Button component={Link} to="/create" size="small" color="primary" onClick={() => setCurrentId(post._id)}>
                         <EditIcon fontSize="default" />
                 </Button>
     
                 <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                     <DeleteIcon fontSize="small" /> 
                 </Button>
             </Grid> 
            )
            }

        </CardActions>

      

        </Card>
    )
}
