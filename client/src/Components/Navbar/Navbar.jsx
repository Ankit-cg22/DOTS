import React from 'react'
import {  AppBar, Toolbar, Typography } from '@material-ui/core';
import { Router, Link } from 'react-router-dom';
import useStyles from './style'
import dots from '../../images/dots.png'
export default function Navbar() {

    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className="brandContainer">
                <img className={classes.image} src={dots} alt="dots-logo" height='50'/>    
                <Typography  className={classes.heading} variant='h2' align='center'>DOTS</Typography>                    
                {/* // component={Link} to="/" */}

            </div>

            <Toolbar>
                
            </Toolbar>

        </AppBar>
    )
}
