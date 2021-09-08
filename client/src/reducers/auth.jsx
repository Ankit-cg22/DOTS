import { AUTH , LOGOUT } from "../constants/actionTypes";

export default (posts = { authData : null } , action ) => {
    switch(action.type)
    {
        case AUTH:
            
            // setting data to local storage 
            localStorage.setItem( 'profile' , JSON.stringify( { ...action?.data }))

            return { ...posts , authData : action?.data }

        case LOGOUT :
            // clear file from local storage
            localStorage.clear()

            return { ...posts , authData : null }

        default:
            return posts
    }
}