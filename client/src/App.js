import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import EditForm from './Components/EditForm/EditForm';

import { BrowserRouter , Switch , Route } from 'react-router-dom';
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



    return (
        <BrowserRouter>
            <Container maxWidth='lg'>
                <Navbar/>
                <Switch>
                    <Route exact path="/" > 
                        <Home currentId={currentId} setCurrentId ={setCurrentId}/>
                    </Route> 
                    
                    <Route exact  path="/create" > 
                        <EditForm currentId={currentId} setCurrentId ={setCurrentId}/>
                    </Route> 
                
                    <Route exact  path="/auth" > 
                        <Auth currentId={currentId} setCurrentId ={setCurrentId}/>
                    </Route> 
                    {/* <Route exact path="/edit" render ={(currentId , setCurrentId) => <EditForm {... currentId , setCurrentId}/>}/> */}

                </Switch>
            </Container>
        </BrowserRouter>
    )
}


export default App;