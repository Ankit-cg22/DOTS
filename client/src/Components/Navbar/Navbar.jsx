import React from 'react'
import {  AppBar, Avatar, Toolbar, Typography , Button} from '@material-ui/core';
import { BrowserRouter, Link } from 'react-router-dom';
import useStyles from './style'
import dots from '../../images/dots.png'
export default function Navbar() {

    const classes = useStyles();

    const user = 0;

    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className="brandContainer">
                <img className={classes.image} src={dots} alt="dots-logo" height='50'/>    
                
                    <Typography  component={Link} to="/"  className={classes.heading} variant='h2' align='center'>DOTS</Typography>                    
               

            </div>

            <Toolbar>
                {user ?
                    <div className="classes.profile">
                        <Avatar className ={classes.purple} alt = {user.result.name} src={user.result.imageUrl}>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6">
                            {user.result.name}
                        </Typography>
                        <Button className ={classes.logout} color ="secondary">
                            Log Out
                        </Button>
                       
                        {/* when we creat user it will have a imageUrl property */}
                    </div>
                    :
                    <div className="classes.profile">
                      
                            <Button component={Link} to="/auth"  color ="secondary" variant="contained">
                                Log In
                            </Button>
                       
                    </div>
                }
            </Toolbar>

        </AppBar>
    )
}
