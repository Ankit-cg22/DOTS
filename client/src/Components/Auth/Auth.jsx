import React , {useState} from 'react'
import useStyles from './styles'

import { Avatar , Button , Paper , Grid , Typography , Container, TextField} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Input from './Input';

export default function Auth() {
    const state = 0;
    const classes = useStyles();
    const [showPassword , setShowPassword] = useState(0)

    const isSignUp = true; // if signUp show sign up options else show sign in options

    const handleSubmit={

    }

    const handleChange ={

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

                    <form className={classes.form} onSubmit = {handleSubmit}>
                        <Grid container spacing={2}>
                            {isSignUp ?

                               <>
                                <Input name="firstName" label = "First Name" handleChange ={handleChange} autofocus half/>
                                <Input name="firstName" label = "First Name" handleChange ={handleChange} autofocus half/>

                               </>
                               :
                                null
                            }
                                {/* //  First Name and Last Name both have very similar configuration
                                //  Instead of writing similat stuff again and again , we define a template kind of thing
                                 */}
                                <>
                                <Input name="email" label ="Email Address" handleChange ={handleChange} type="email"/>
                                <Input name = "password" label ="Password" handleChange ={handleChange} type= {showPassword ? 'text'  : 'password'} handleShowPassword={handleShowPassword}  />
                                {isSignUp && <Input name = "confirmPassword" label ="Confirm Password" handleChange ={handleChange} type= 'password'   />}

                                </>
                            
                        </Grid>

                        <Button type='submit' fullWidth variant="contained" color='primary' className={classes.submit}>
                            {isSignUp ? "Sign Up" : "Sign In" }
                        </Button>
                    </form>
               </Paper>
           </Container>
        </div>
    )
}
