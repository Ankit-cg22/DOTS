import * as api from '../api/index' 
import {AUTH } from '../constants/actionTypes'

export const signUp = ( authFormData , history ) => async(dispatch) => {
    try {
        
        // api call for backend
        const { data } = await api.signUp(authFormData);
        // { } this is called destructuring the data
        // it unpacks properties from objects, into distinct variables

        // dispatch for the store
        dispatch({type : AUTH ,  data })        

        // redirect to the homepage
        history.push('/')

    } catch (error) {
        console.log(error);
    }
}

export const signIn = ( authFormData , history ) =>async(dispatch) =>  {
    try {
        
        // api call for backend
        const { data } = await api.signIn(authFormData);

        // dispatch for the store
        dispatch({type : AUTH ,  data })   
        
        // redirect to the homepage
        history.push('/')

    } catch (error) {
        console.log(error);
    }
    
}
