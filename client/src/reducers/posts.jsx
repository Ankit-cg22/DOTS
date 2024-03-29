// reducers : 

import { CREATE , UPDATE , DELETE , FETCH_ALL ,FETCH_BY_TAG , FETCH_POST_BY_ID ,LOADING_START , LOADING_END , COMMENT ,USER_INFO_BY_ID } from '../constants/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state={isLoading:true , posts:[]} , action) => {
    switch(action.type)
    {
        case LOADING_START :
            return {...state , isLoading : true}
            
        case LOADING_END :
            return {...state , isLoading : false}
            
        case FETCH_ALL:
            return {
                ...state,
                posts : action.payload.data,
                currentPage :action.payload.currentPageNumber,
                totalNumberOfPages : action.payload.totalNumberOfPages
            }

        case FETCH_BY_TAG:
            return  { ...state, posts : action.payload.data };

        case FETCH_POST_BY_ID:
            return { ...state  , post: action.payload}        
            
        
        
        case CREATE:
            return {...state , posts : [...state.posts, action.payload]}
            // spread all existing posts and add a new one

        case UPDATE:
            return {...state , posts : state.posts.map((post) => ( post._id === action.payload._id ? action.payload : post))};
     
            // what does it mean?
            // map over all posts , if id of any post is equal to the id of the post that we have in the payload
            // then return the updated post
            // other wise it is not a post that we updated , so return it as it is.
        
        case DELETE:
            return {...state , posts : state.posts.filter((post) => post._id !== action.payload)};
            // those posts that satisfy the condition stay , others are deleted

        case COMMENT :
            return {
                ...state ,
                // idea is simple  : > the post in which comment was added , return it after adding the new comment to it
                                    // > return all other posts as it is
                posts : state.posts.map((post) => {
                    if( post._id === action.payload._id ){
                        return action.payload;
                    }

                    return post;
                })
            }
        case USER_INFO_BY_ID:
            return {...state , postsByUserId: action.payload.posts , profileUser : action.payload.user}

        default :
            return state;
    }
}

