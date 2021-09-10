import React , {useState ,useEffect } from 'react'
import {  Grid , AppBar, Avatar, Toolbar, Typography , Button} from '@material-ui/core';
import { Link  , useHistory , useLocation} from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import useStyles from './style'
import dots from '../../images/dots.png'
export default function Navbar() {

    const classes = useStyles();

    const [user,setUser] = useState( JSON.parse(localStorage.getItem('profile')))

    const dispatch = useDispatch();
    const history= useHistory()
    const location= useLocation()


    const logout = () => {
        dispatch({ type : 'LOGOUT' })
        history.push('/')
        setUser(null)
    }

    useEffect(() => {
       const token = user?.token;

       if(token) {
        const decodedToken = decode(token);
        
        // after one hour token expires so we logout the user
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }

       setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])
    // we call it when url location changes

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
                        <Button className ={classes.logout} color ="secondary" variant="contained" onClick ={logout}>
                            Log Out
                        </Button>
                       
                        {/* when we creat user it will have a imageUrl property */}
                    </div>
                    :
                    <div className="classes.profile">
                      
                            <Button component={Link} to="/auth"  color ="primary" variant="contained">
                                Log In
                            </Button>
                       
                    </div>
                }
            </Toolbar>

        </AppBar>
    )
}
