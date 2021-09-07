import * as api from '../api/index' 
import {AUTH} from '../constants/actionTypes'

export const signUp = ( authFormData , history ) => async(dispatch) => {
    try {
        
        // api call for backend
        api.signUp();

        // dispatch for the store
        

        // redirect to the homepage
        history.push('/')

    } catch (error) {
        console.log(error);
    }
}

export const signIn = ( authFormData , history ) =>async(dispatch) =>  {
    try {
        
        // api call for backend
        api.signIn();
        // dispatch for the store

        // redirect to the homepage
        history.push('/')

    } catch (error) {
        console.log(error);
    }
    
}