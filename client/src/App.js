import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';

import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Auth from './Components/Auth/Auth';

const App= () => {

    return (
        <BrowserRouter>
            <Container maxWidth='lg'>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path = "/auth" component={Auth} />
                    {/* <Route exact path="/edit" render ={(currentId , setCurrentId) => <EditForm {... currentId , setCurrentId}/>}/> */}

                </Switch>
            </Container>
        </BrowserRouter>
    )
}


export default App;