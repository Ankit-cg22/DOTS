import React, {useEffect , useState} from 'react'
import useStyles from './styles'
import {Grid ,Card , CardActions , CardContent, CardMedia ,Button , Typography,ButtonBase   } from '@material-ui/core'

import ThumbUpAltIcon  from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { deletePost , updateLikes } from '../../../actions/posts';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
export default function Post( {post , setCurrentId}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = JSON.parse(localStorage.getItem('profile'));

    const openPost=()=>{
        history.push(`/posts/${post._id}`)
    }

    const userId = (currentUser?.result?._id )
    const hasLiked = post?.likes.find((like) => like === userId)
    const [likes , setLikes] = useState(post?.likes)

    const handleLikeClick = async () => {
        dispatch(updateLikes(post._id))

        if(hasLiked) setLikes(post.likes.filter( (id) => id === userId ))
        else setLikes([ ...post.likes , userId])

    }

    console.log(currentUser?.result?._id)
    console.log(post?.author)

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.postInfo}>
                <ButtonBase className={classes.cardAction} onClick={openPost}>
                    <div className={classes.overlayWrapper}>
                        <div></div>
                        <div className={classes.overlay}>   
                            <Typography variant="body3">{post.name}</Typography>
                            <Typography variant="body3">{moment(post.createdAt).fromNow()}</Typography>
                        </div>
                    </div>

                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
                    
                    <CardContent className={classes.description}>
                        <Typography variant="body2" color="textSecondary" component="p">{post.message.split(' ').splice(0, 15).join(' ')}...</Typography>
                    </CardContent>
                    <div className={classes.details}>
                        <Typography variant="body2" color="textSecondary" component="h2">
                            {post.tags.map((tag) => `#${tag} `)}
                        </Typography>
                    </div>
                </ButtonBase>

                <CardActions className={classes.cardActions}>
                    <Button disabled = { !currentUser?.result } size="small" color="primary" onClick={handleLikeClick}>
                        {hasLiked ? 
                            <><ThumbUpAltIcon fontSize="small" /> : {likes.length}</>
                        :
                            <><ThumbUpAltOutlined fontSize="small" /> : {likes.length} </>
                        }
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
            </div>
      

        </Card>
    )
}
