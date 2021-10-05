// reducers : 

import { CREATE , UPDATE , DELETE , FETCH_ALL ,FETCH_BY_TAG  } from '../constants/actionTypes';

export default (state=[] , action) => {
    switch(action.type)
    {
        case FETCH_ALL:
            return {
                ...state,
                posts : action.payload.data,
                currentPage :action.payload.currentPageNumber,
                totalNumberOfPages : action.payload.totalNumberOfPages
            }

        case FETCH_BY_TAG:

            return  { ...state, posts : action.payload.data };
        
        case CREATE:
            return [...state, action.payload]
            // spread all existing posts and add a new one

        case UPDATE:
            return state.map((post) => ( post._id === action.payload._id ? action.payload : post));

            // what does it mean?
            // map over all posts , if id of any post is equal to the id of the post that we have in the payload
            // then return the updated post
            // other wise it is not a post that we updated , so return it as it is.
        
        case DELETE:
            return state.filter((post) => post._id !== action.payload);
            // those posts that satisfy the condition stay , others are deleted

        default :
            return state;
    }
}

