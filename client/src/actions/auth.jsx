import * as api from '../api/index' 
import {AUTH , AUTH_LOADING_START , AUTH_LOADING_END ,AUTH_FAIL } from '../constants/actionTypes'


export const signUp = ( authFormData , history, location ) => async(dispatch ) => {
    dispatch( {type : AUTH_LOADING_START })
    try {
        
        dispatch( {type : AUTH_LOADING_START })
        // api call for backend
        const { data } = await api.signUp(authFormData);
        // { } this is called destructuring the data
        // it unpacks properties from objects, into distinct variables

        // dispatch for the store
        dispatch({type : AUTH ,  data })    
        
        dispatch( {type : AUTH_LOADING_END })

        // redirect to the homepage
        history.push(`${location.state.prevPath}`)

    } catch (error) {
        console.log(error.response.data.message);
        dispatch({type : AUTH_FAIL , payload : error.response.data.message})
    }
    dispatch( {type : AUTH_LOADING_END })
}

export const signIn = ( authFormData , history , location ) =>async(dispatch) =>  {
    dispatch( {type : AUTH_LOADING_START })
    try {
        
        // api call for backend
        const { data } = await api.signIn(authFormData);

        // dispatch for the store
        dispatch({type : AUTH ,  data })   
        
        // redirect to the homepage
        history.push(`${location.state.prevPath}`)


    } catch (error) {        
        dispatch({type : AUTH_FAIL , payload : error.response?.data.message})
        
    }
    dispatch( {type : AUTH_LOADING_END })
    
}
