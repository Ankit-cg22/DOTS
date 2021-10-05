import * as api from '../api';
// * means we imported everything from the api folder

// action creators : action creators are functions that create actions

// const getPosts = () => {
//     const action = { type : 'FETCH_ALL' , payload : []}

//     return action 
// }

//  we can follow this above syntax but we need asynchronity
// so we follow this below method( it uses redux thunk )

import { CREATE , UPDATE , DELETE , FETCH_ALL , FETCH_BY_TAG} from '../constants/actionTypes';


export const getPosts = (page) => async (dispatch) => {
    
    try {
        const { data } = await api.fetchPosts(page);
        // we are targeting the data object of the response we will get back

        console.log(data)

        dispatch( { type : FETCH_ALL , payload : data});
    } catch (error) {
        console.log(error.message);
    }

}

export const getPostsByTag = (searchQuery) => async (dispatch) => {
    
    try {

        const { data : {data} } = await api.fetchPostsByTag(searchQuery);
        // we are targeting the data object of the response we will get back
        console.log(data)
        dispatch( { type : FETCH_BY_TAG , payload : {data : data} });
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