// reducers : 

import { CREATE , UPDATE , DELETE , FETCH_ALL  } from '../constants/actionTypes';

export default (posts=[] , action) => {
    switch(action.type)
    {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts , action.payload]
            // spread all existing posts and add a new one

        case UPDATE:
            return posts.map((post) => ( post._id === action.payload._id ? action.payload : post));

            // what does it mean?
            // map over all posts , if id of any post is equal to the id of the post that we have in the payload
            // then return the updated post
            // other wise it is not a post that we updated , so return it as it is.
        
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
            // those posts that satisfy the condition stay , others are deleted

        default :
            return posts;
    }
}
