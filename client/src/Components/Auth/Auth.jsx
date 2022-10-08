import React , {useState} from 'react'
import useStyles from './styles'

import { Avatar , Button , Paper , Grid , Typography , Container, CircularProgress} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch } from 'react-redux';
import Input from './Input';
import  {  useHistory } from 'react-router-dom'

import { signIn , signUp } from '../../actions/auth';
import { useSelector } from 'react-redux';
import {useLocation} from 'react-router-dom'
// initial data for the auth form 

const initialData = { firstName: '' , lastName: '' , email: '' , password: '' , confirmPassword: ''};

export default function Auth() {
    const location = useLocation();
    const dispatch = useDispatch();
    const classes = useStyles();
    const [showPassword , setShowPassword] = useState(0)
    const [isSignUp , setIsSignUp] = useState(0); // if signUp show sign up options else show sign in options
    const [authFormData, setAuthFormData] = useState(initialData)
    const history = useHistory();
    const {authFail, isAuthLoading , authFailMessage} = useSelector( (state) => state.auth )
    const handleSubmit= (e) => {
        e.preventDefault()
        
        // sign up
        if(isSignUp)
        {
            dispatch( signUp( authFormData ,history , location ));
        }else{
            dispatch( signIn( authFormData ,history , location));

        }
    }
    
    const handleChange = (e) => {
        setAuthFormData({  ...authFormData , [e.target.name]: e.target.value })
        
        // all the inputs have the handleChange funtion, [e.target.name ] gives us which input value was changes
    }

    const switchSignStatus =() => { 
        setIsSignUp(!isSignUp )
        setShowPassword(false)

    }

    const handleShowPassword=()=>{
        setShowPassword(!showPassword)
    }

    
    return (
        <div>
           <Container component = "main" maxWidth="xs">
               <Paper className={classes.paper} elevation={3}>
                    <Avatar className = {classes.avatar}/>
                    <LockOutlinedIcon/>
                    <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>

                    
                    {authFail && 
                        <Typography variant="body2" color="error" style={{textAlign:"center"}}>{authFailMessage}</Typography>
                    }


                    <form className={classes.form} onSubmit = {handleSubmit}>
                        <Grid container spacing={2}>
                            {isSignUp ?

                               <>
                                <Input name="firstName" label = "First Name" handleChange ={handleChange} autofocus half/>
                                <Input name="lastName" label = "Last Name" handleChange ={handleChange} autofocus half/>

                               </>
                               :
                                null
                            }
                            {/* //  First Name and Last Name both have very similar configuration
                            //  Instead of writing similat stuff again and again , we define a template kind of thing
                                */}
                            
                            <Input name="email" label="Email Address" handleChange ={handleChange} type="email"/>
                            
                            <Input name = "password" label ="Password" handleChange ={handleChange} type= {showPassword ? 'text'  : 'password'} handleShowPassword={handleShowPassword}  />
                            {isSignUp ? <Input name = "confirmPassword" label ="Confirm Password" handleChange ={handleChange} type= 'password'   /> : <></>}

                            

                            <Grid container justify = 'flex-end'>
                                <Grid item>
                                    {isSignUp ?
                                         "Already have account ?  " 
                                        : 
                                        "Don't have account ? "
                                    }
                                    <Button variant="outlined" color = "secondary" onClick = {switchSignStatus} >
                                    
                                        { isSignUp ?
                                            "Sign In "
                                            :
                                            "Sign Up"
                                        }
                                    </Button>
                                </Grid>
                            </Grid>
                            
                        </Grid>

                        <Button type='submit' fullWidth variant="contained" color='primary' className={classes.submit}>
                            {isAuthLoading ? 
                                <CircularProgress color="red" size={24.5}/> 
                                : 
                                `${isSignUp ?   "Sign Up" : "Sign In"  }`
                            }
                        </Button>
                    </form>
               </Paper>
           </Container>
        </div>
    )
}
