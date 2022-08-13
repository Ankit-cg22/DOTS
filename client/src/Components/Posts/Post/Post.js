import React, {useEffect , useState} from 'react'
import useStyles from './styles'
import {Grid ,Card , CardActions , CardContent, CardMedia ,Button , Typography,ButtonBase , Modal , Box   } from '@material-ui/core'
import LocationOnIcon  from '@material-ui/icons/LocationOn';
import ThumbUpAltIcon  from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { deletePost , updateLikes ,getPostsBySearch} from '../../../actions/posts';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
export default function Post( {post , setCurrentId}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = JSON.parse(localStorage.getItem('profile'));
    const [openModal , setOpenModal] = useState(false)
    const openPost=()=>{
        history.push(`/posts/${post._id}`)
    }

    const userId = (currentUser?.result?._id )
    const [ hasLiked , setHasLiked ] = useState(post?.likes.find((like) => like === userId))
    const [likes , setLikes] = useState(post?.likes.length)

    const handleLikeClick = async () => {
        
        if(hasLiked){
            setLikes(likes-1)
        } 
        else{
            setLikes(likes+1)
        }
        setHasLiked(!hasLiked)

        dispatch(updateLikes(post._id))

    }

    const handleDeleteClick= () => {
        
        dispatch(deletePost(post._id))
        setOpenModal(false)
    }
    
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.postInfo}>
                <ButtonBase className={classes.cardAction} onClick={openPost}>
                    <div className={classes.overlayWrapper}>
                        <div></div>
                        <div className={classes.overlay}>   
                            <Typography variant="body3">{post.name}</Typography>
                            <Typography style={{marginLeft:"15px"}} variant="body3">{moment(post.createdAt).fromNow()}</Typography>
                        </div>
                    </div>

                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                        
                        {post.title.split(' ').splice(0, 5).join(' ')}
                        
                        {post.title.split(' ').splice(0, 10).join(' ') !== post.title &&
                            '...'
                        }       
                        
                    </Typography>
                    
                    <CardContent className={classes.description}>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {window.innerWidth > 400 ? 
                            post.message.split(' ').splice(0, 30).join(' ')
                        : 
                            post.message.split(' ').splice(0, 15).join(' ')
                        }...
                        </Typography>
                    </CardContent>
                    <div className={classes.details}>
                        <Typography variant="body2" color="textSecondary" component="h2">
                                {post.tags.map((tag) => `#${tag} `)}
                        </Typography>
                    </div>
                </ButtonBase>

                <CardActions className={classes.cardActions}>
                    <Button className={ classes.likebutton }  disabled = { !currentUser?.result } size="small" color="primary" onClick={handleLikeClick}>
                        {hasLiked ? 
                            <><ThumbUpAltIcon fontSize="small" /> : {likes}</>
                        :
                            <><ThumbUpAltOutlined fontSize="small" /> : {likes} </>
                        }
                    </Button>

                    

                    {( currentUser?.result?._id === post?.author) &&( // visible only if current user is creator of the post
                        <Grid className={classes.authorButtons }>
            
                        <Button component={Link} to="/create" size="small" color="primary" onClick={() => setCurrentId(post._id)}>
                                <EditIcon className={classes.editButton}  fontSize="default" />
                        </Button>
            
                        <Button size="small" color="primary" onClick={()=>setOpenModal(true)}>
                            <DeleteIcon className={classes.deleteButton} fontSize="small" /> 
                        </Button>
                    </Grid> 
                    )
                    }

                    <Button className={classes.visitButton} color="primary" variant="contained" >
                        <a className={classes.visitLink} href={`https://maps.google.com/?q=${post.latitude},${post.longitude}`} target="_blank">
                            <LocationOnIcon/>    
                        </a>      
                    </Button>

                </CardActions>
            </div>
      
            <Modal
                open={openModal}
                onClose={()=>{}}
                BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.5)" , opacity:"0.5" } }}
            >
                <Box className={classes.modalBox}>
                    <div className={classes.deleteModalContainer}>
                        <Typography>
                            Do you want to delete the post ?
                        </Typography>
                        <div className={classes.deleteActionButtons}>
                                <Button className={classes.deleteNoButton} color="primary" variant="contained" onClick={()=>setOpenModal(false)}> No </Button>
                                <Button className={classes.deleteYesButton} color="secondary" variant="contained" onClick={handleDeleteClick}> Yes</Button>
                        </div>
                    </div>
                </Box>
        </Modal>

        </Card>
    )
}
