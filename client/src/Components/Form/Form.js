import {React , useState , useEffect } from 'react'
import { TextField , Button , Typography , Paper } from '@material-ui/core';
import useStyles from './styles'
import FileBase from 'react-file-base64'; // to take input of images

import {useDispatch} from 'react-redux'
import { createPost , updatePost } from '../../actions/posts';

import { useSelector } from 'react-redux'; // to select particular items from the reduc store

import  { Redirect , useHistory } from 'react-router-dom'

export default function Form( { currentId , setCurrentId }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory()
    const [postData , setPostData] = useState({
         title:'', message :'' ,author :'' , tags:'',selectedFile:''
    });

    
    const postUpdate = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

    useEffect(()=> {
        if(postUpdate) setPostData(postUpdate);
    } , [postUpdate] )

    const handleSubmit= (e) => {
        e.preventDefault();

        if( currentId)
        {
            // if a currentId is present , it means we are updating a pre-existing post 
            // so dispatch updatePost , pass the currentId in it.
            dispatch( updatePost(currentId , postData))
        }
        else{
            dispatch( createPost(postData))
        }
        clear()
        history.push("/") // to redirect to home 
        
    }

    const clear = () => {
        setCurrentId(null)
        setPostData({title:'', message :'' ,author :'' , tags:'',selectedFile:''})
    }

    return (

        <div>
            <Paper className={classes.paper}>
                <form autoComplete='off' noValidate className={`${classes.root} ${classes.form} `} onSubmit={handleSubmit}>
                    <Typography variant = "h6"> {currentId ? "Edit the " : "Place a" } DOT</Typography>   
                    <TextField 
                        name = 'author'
                        variant="outlined" 
                        label ="Author" 
                        fullWidth
                        value={postData.author}
                        onChange={(e) => setPostData({...postData, author : e.target.value})}
                    />
                    <TextField 
                        name = 'title'
                        variant="outlined" 
                        label ="Title" 
                        fullWidth
                        value={postData.title}
                        onChange={(e) => setPostData({...postData, title : e.target.value})}
                    />
                    <TextField 
                        name = 'message'
                        variant="outlined" 
                        label ="Message" 
                        fullWidth
                        value={postData.message}
                        onChange={(e) => setPostData({...postData, message : e.target.value})}
                    />
                    <TextField 
                        name = 'tags'
                        variant="outlined" 
                        label ="Tags" 
                        fullWidth
                        value={postData.tags}
                        onChange={(e) => setPostData({...postData, tags : e.target.value.split(',')})}
                    />


                    <div className={classes.fileInput}>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                            />
                    </div>

                    <Button className = {classes.buttonSubmit} variant = 'contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                    <Button variant = 'contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>

                </form>           
            </Paper>

        </div>
    )
}
