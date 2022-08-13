import React , {useState, useRef} from 'react'
import { Typography , TextField , Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import useStyles from './style'
import { postComment } from '../../../../actions/posts'

const demoComments = [ 6 ,5 ,6  , 8  ,7 ,8 ,7 ,8, 7]

export default function CommentSection( {post} ){
    // why do we need the post here
    // to load previous comments and store the new added comments

    const dispatch = useDispatch()
    const classes = useStyles()
    const [comments , setComments] = useState(post?.comments);
    const [comment , setComment] = useState("");

    // grab the user who is commenting(he is signed in so local stroage -> 'profile' has the data about user)
    const user = JSON.parse(localStorage.getItem('profile'))

    const handleCommentSubmit = async () =>{
        setComment("")
        // form the string that we want to store(and later show) : "user's_name : comment he made"
        const commentString = `${user?.result.name} : ${comment} `

        // dispatch 2 things : the comment and the post it belongs to
        const newComments = await dispatch(postComment(commentString , post._id))
        // here we wait for the new comment to get added and we receive the new set of comments
        // we can use it to instantly add the new comment to comments list(without refreshing)

        setComments(newComments)

        
    }

    return(
        <div>
            <div className={classes.commentsOuter}>
                <div className={classes.commentsInner}>
                    <Typography gutterBottom variant="h5">Comments</Typography>
                    {/* gutterBottom just adds a bottom margin */}
                    {/* loop over the comments(of the current post) and show them */}
                    {comments?.map( ( cmt , idx) => (
                        //the second property is populated by react with the index of the current element in the map
                        //in our case we named it idx , but it can be named anything
                        // individual comment
                        <Typography variant="subtitle1" gutterBottom>
                            {cmt}
                        </Typography>
                    ))}
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