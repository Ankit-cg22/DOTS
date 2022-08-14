import React , {useState, useRef} from 'react'
import { Typography , TextField , Button, Divider } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import useStyles from './style'
import { postComment } from '../../../../actions/posts'
import moment from 'moment'
const demoComments = [ 6 ,5 ,6  , 8  ,7 ,8 ,7 ,8, 7]

export default function CommentSection( {post} ){
    // why do we need the post here
    // to load previous comments and store the new added comments

    const dispatch = useDispatch()
    const classes = useStyles()
    const [comments , setComments] = useState(() => post?.comments.reverse());
    const [comment , setComment] = useState("");
   

    // grab the user who is commenting(he is signed in so local stroage -> 'profile' has the data about user)
    const user = JSON.parse(localStorage.getItem('profile'))

    const handleCommentSubmit = async () =>{
        setComment("")
        // form the string that we want to store(and later show) : "user's_name : comment he made"
        const commentObject = { user_id : user?.result._id ,  comment : comment} 
        
        
        // dispatch 2 things : the comment and the post it belongs to
        const newComments = await dispatch(postComment(commentObject , post._id))
        // here we wait for the new comment to get added and we receive the new set of comments
        // we can use it to instantly add the new comment to comments list(without refreshing)

        setComments(newComments)

        
    }
    return(
        <div style={{ width:"100%"}}>
            <div className={classes.commentsOuter}>
                <div className={classes.commentsInner}>
                    <Typography gutterBottom variant="h5">Comments</Typography>
                    {/* gutterBottom just adds a bottom margin */}
                    {/* loop over the comments(of the current post) and show them */}
                    {comments?.map( ( cmt , idx) => {
                        console.log(cmt.user)
                        return(
                        //the second property is populated by react with the index of the current element in the map
                        //in our case we named it idx , but it can be named anything
                        // individual comment
                        <div key={idx} className={classes.commentContainer}>
                            <div className={classes.commentTopdiv}>
                                <Typography variant="body2">
                                    <a className={classes.ProfileLink} href={`/profile/${cmt.user?._id}`}>
                                        {cmt.user.name}
                                    </a>
                                </Typography >
                                <Typography variant="body2">{moment(cmt.createdAt).fromNow()}</Typography>
                            </div>
                            <div className={classes.commentBody} >
                                <Typography  variant="body2">{cmt.comment}</Typography>
                            </div>
                            <Divider style={{margin:"15px 0px"}}/>
                        </div>
                    )})}
                </div>
                
                { user?.result.name && (
                    <div className={classes.commentInput}>
                        
                        <TextField
                            className = {classes.commentText}
                            fullWidth
                            rows={1}
                            variant="outlined"
                            label="Write something...."
                            value={comment}
                            onChange= {(e) => setComment(e.target.value)}
                            multiline
                            maxRows ={3}
                        />
                        <Button 
                            fullWidth
                            className ={classes.submitButton}
                            variant="contained" 
                            disabled={!comment} 
                            onClick={handleCommentSubmit}
                            color="primary"
                            
                        >
                            COMMENT 
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )

}