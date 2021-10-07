import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import EditForm from './Components/EditForm/EditForm';
import PostDetails from './Components/Posts/PostDetails/PostDetails';
import { BrowserRouter , Switch , Route ,Redirect} from 'react-router-dom';
import Auth from './Components/Auth/Auth';


import  { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';



const App= () => {

    const [currentId , setCurrentId] = useState(0);

    const dispatch = useDispatch();
    // const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
      }, [currentId, dispatch]);
    // here we dispatch the action , 
    // we handle this dispatch in the reducer funtion for corresponding stuff

    const user= JSON.parse(localStorage.getItem("profile"))

    return (
        <BrowserRouter>
           
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={() => <Redirect to='/posts'/>} />

                    <Route exact path="/posts" > 
                        <Home currentId={currentId} setCurrentId ={setCurrentId}/>
                    </Route> 
                    
                    <Route exact  path="/create" > 
                        <EditForm currentId={currentId} setCurrentId ={setCurrentId}/>
                    </Route> 
                
                    <Route exact  path="/auth" > 
                        {!user ? 
                            <Auth currentId={currentId} setCurrentId ={setCurrentId}/>
                        :
                            <Redirect to='/posts'/>
                        }

                        {/* if there is a logged in user and he is trying to access '/auth' we redirect him to the posts page */}
                        
                    </Route> 
                        
                    <Route path="/posts/search" exact >
                        <Home/> 
                    </Route>

                    <Route exact path='/posts/:id'>
                        <PostDetails/>
                    </Route>
                    
                   
                </Switch>
            
        </BrowserRouter>
    )
}


export default App;