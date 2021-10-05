import React, {useState} from 'react';
import { Button , Grid ,Paper , AppBar, TextField } from '@material-ui/core';
import Posts from '../Posts/Posts'
import { Link } from 'react-router-dom';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Paginate from '../Pagination/Pagination';
import { useLocation, useHistory } from 'react-router-dom';
import { getPostsByTag } from '../../actions/posts';
import useStyles from './styles'
import { useDispatch } from 'react-redux';

function useQuery(){
    return new URLSearchParams(useLocation().search)
}

export default function Home( {  currentId , setCurrentId }) {
   const classes = useStyles();
   const user = JSON.parse(localStorage.getItem('profile'));
   const history = useHistory();
   const query = useQuery() // page info
   const page = query.get('page') || 1; // searches for 'page' parameter in the url
   // if 'page' not present , set it to 1(first page)

   const searchQuery = query.get('searchQuery')

   const [tagSearch , setTagSearch] = useState('');
   const [search , setSearch] = useState('');

   const dispatch = useDispatch()

   const handleTagInput=(e)=>{
    setTagSearch(e.target.value)
   }

   const handleTagSearch=()=>{
    if(tagSearch)
    {
        dispatch(getPostsByTag({search , tag : tagSearch}))
        // history.push(`/posts/search?searchQuery=${search || 'none'}&tag=${tagSearch}`)
        
    }else{
        history.push('/')
    }
   }


//    const handleKeyPress = (e)=>{
//        if(e.keyCode === 13) handleTagSearch()
//    }

    return (

        <Grid container >
            <Grid item md={10} xs={10} sm={10} >
                {/* xs : xtra small , take whole space in xs devices */}
                {/* sm : on small devices , take 7 out of 12 spaces */}
                <Posts  setCurrentId = {setCurrentId}  />

                <Paper className={classes.pagination}>
                    <Paginate page={page}/>
                </Paper>
                
            </Grid>
            
            <Grid item md={2} xs={2} sm={2}>
                
                    {user?.result?.name?
                        <Button className = {classes.addButton} component={Link} to="/create"  color ="secondary" variant="contained">
                            <AddBoxIcon/>
                        </Button>
                    :
                        <Button className = {classes.signMsg} color ="secondary" variant="contained">
                            <p> Log in to place DOTS </p>
                        </Button> 
             
                    }   

                    <Paper className={classes.searchBox}>
                        <TextField label="Search tags" variant="outlined" onChange={(e)=>handleTagInput(e)} />
                        <Button variant ="contained" color="primary" onClick={() => handleTagSearch()}> Search </Button>
                    </Paper>


            </Grid>
        </Grid>
    
    )
}
