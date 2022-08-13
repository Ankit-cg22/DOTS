import * as api from '../api';
// * means we imported everything from the api folder

// action creators : action creators are functions that create actions

// const getPosts = () => {
//     const action = { type : 'FETCH_ALL' , payload : []}

//     return action 
// }

//  we can follow this above syntax but we need asynchronity
// so we follow this below method( it uses redux thunk )

import {  CREATE , UPDATE , DELETE , FETCH_ALL , FETCH_BY_TAG , FETCH_POST_BY_ID , LOADING_START , LOADING_END , COMMENT , USER_INFO_BY_ID  } from '../constants/actionTypes';

export const getPosts = (page) => async (dispatch) => {
    
    try {

        dispatch( {type : LOADING_START })
       
        const { data } = await api.fetchPosts(page);
        // we are targeting the data object of the response we will get back

        console.log(data)

        dispatch( { type : FETCH_ALL , payload : data});

        dispatch( {type : LOADING_END })

    } catch (error) {
        console.log(error.message);
    }

}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    
    try {
        dispatch( {type : LOADING_START })     
        
        const { data : {data} } = await api.fetchPostsBySearch(searchQuery);
        // we are targeting the data object of the response we will get back
        console.log(searchQuery)
        dispatch( { type : FETCH_BY_TAG , payload : {data : data} });
        
        dispatch( {type : LOADING_END })
       
    } catch (error) {

        console.log(error.message);
    }

}


export const getPost = (id) => async(dispatch) => {
        
    try {
        dispatch( {type : LOADING_START })
        
        const { data } = await api.fetchPostById(id);
        // we are targeting the data object of the response we will get back
        
        dispatch( { type : FETCH_POST_BY_ID  , payload : data});
        
        dispatch( {type : LOADING_END })
    } catch (error) {
        console.log(error.message);
    }

}

export const createPost = (post) => async (dispatch) =>{
    try {
        const {data} = await api.createPost(post);
        // making  a post request to backend
        
        dispatch({ type : CREATE , payload : data})

    } catch (error) {
        console.log({message : error.message})       
    }
}

export const updatePost = ( id , updatedPost ) => async (dispatch) => {
    try {
        // api  request to update post

        const { data } = await api.updatePost(id , updatedPost) 
        // from the update call we receive back the updatedPost data

        dispatch( { type: UPDATE , payload : data} )

    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type : DELETE , payload : id})
    } catch (error) {
        console.log(error);
    }
}

export const updateLikes = (id) => async (dispatch) =>{
    try{
        const { data } = await api.updateLikes(id) 
        // from the update call we receive back the updatedPost data

        dispatch( { type: UPDATE , payload : data} )
    }catch(error){
        console.log(error)
    }
}


export const postComment = (commentString , id) => async(dispatch) => {
    try {
        const {data} = await api.postComment(commentString,id)
        
        // data : contains the new updated post (with the new comment added)
        dispatch({ type : COMMENT , payload : data})

        return data.comments;
        
    } catch (error) {
        console.log(error)
    }
}


export const getUserInfo = (id) => async(dispatch) => {
    try{
        dispatch( {type : LOADING_START })
        
        const { data } = await api.fetchUserInfo(id);
        console.log(data)
        dispatch( { type : USER_INFO_BY_ID , payload : data});
        
        dispatch( {type : LOADING_END })
    }catch(error){
        console.log(error.message)
    }
}