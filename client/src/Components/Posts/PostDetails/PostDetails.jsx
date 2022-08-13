import React , {useEffect , useState} from 'react'
import {Paper , Typography , CircularLoader , Divider , Button , CardActions ,Grid , Modal , Box} from '@material-ui/core'

import ThumbUpAltIcon  from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch , useSelector } from 'react-redux'
import moment from 'moment'
import {useParams , useHistory} from 'react-router-dom'
import { getPost } from '../../../actions/posts'
import LoadScreen from '../../LoadScreen/LoadScreen'
import CommentSection from './CommentSection/CommentSection'
import { Link } from 'react-router-dom';
import useStyles from './styles'
import { deletePost , updateLikes ,getPostsBySearch} from '../../../actions/posts';
import DeletePostModal from '../../Modal/DeletePostModal/DeletePostModal';

export default function PostDetails({setCurrentId}) {

    const classes = useStyles()

    const {post , posts , isLoading }  = useSelector((state) => state.posts)
    const [openModal , setOpenModal] = useState(false)
    const currentUser = JSON.parse(localStorage.getItem('profile'));
    const userId = (currentUser?.result?._id )

    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams()
    useEffect(()=>{
        dispatch(getPost(id))
    }, [id] )
    
    
    const [ hasLiked , setHasLiked ] = useState(post?.likes.find((like) => like === userId))
    const [likes , setLikes] = useState(post ? post.likes.length : 0)

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
        history.push("/")
    }
    console.log(post);

     
    if(isLoading)
    {
        return(
            <LoadScreen/>
        ) 
    }

    if(!post){
        return(
            <div style={{width:"100%" , display:"flex" , alignItems:"center" , justifyContent:"center"}}>
                <Typography variant="h5">Post does not exist</Typography>
            </div>
        )
    }
   
        
    return (
        <>
        <Paper className={classes.mainPaper} elevation={6}>
            <div className={classes.card}>
                <div className={classes.section}>
                        
                        <div className={classes.postInfoContainer}>
                            
                            <div className={classes.postInfo}>
                                <Typography className={classes.authorName} variant="body1">
                                    Created by:
                                    <Typography variant="body1" className={classes.profileNameLink} component={Link} to={`/profile/${post.author}`}>{post.name}</Typography>
                                </Typography>
                                <Typography className={classes.createdAt} variant="body1">{moment(post.createdAt).fromNow()}</Typography>
                            </div>
                        </div>
                        <Typography  className={classes.postTitle}  variant="h5" component="h2">{post.title}</Typography>

                        <Typography style={{margin:"10px 0px"}} variant="body1" color="textSecondary" component="h3">
                            {post.tags.map((tag) => {
                                return (
                                    <span>
                                        #{tag}
                                    </span>
                                )
                            })}
                        </Typography>
                                                
                        <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
                        
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
                        
                                    <Button className={classes.editButton}  component={Link} to="/create" size="small" color="primary" onClick={() => setCurrentId(post._id)}>
                                            <EditIcon  fontSize="default" />
                                    </Button>
                        
                                    <Button size="small" color="primary" onClick={()=>setOpenModal(true)}>
                                        <DeleteIcon className={classes.deleteButton} fontSize="small" /> 
                                    </Button>
                                </Grid> 
                                )
                                }

                                <Button className={classes.visitButton} color="primary" variant="contained" >
                                    <a className={classes.visitLink} href={`https://maps.google.com/?q=${post.latitude},${post.longitude}`} target="_blank">
                                        VISIT
                                    </a>      
                                </Button>

                            </CardActions>

                        <Divider style={{ margin: '20px 0' }} />

                    <CommentSection post = {post} />
                
                    <Divider style={{ margin: '20px 0' }} />
                </div>
                <div className={classes.imageSection}>
                    <img width="200px" height="200px" className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
                </div>
            </div>
        </Paper>
        <DeletePostModal openModal={openModal} handleDeleteClick={handleDeleteClick} setOpenModal={setOpenModal} />
    </>

    )
}
