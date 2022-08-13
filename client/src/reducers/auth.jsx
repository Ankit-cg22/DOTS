import { AUTH , LOGOUT , AUTH_FAIL ,AUTH_LOADING_START ,AUTH_LOADING_END } from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { authData : null } , action ) => {
    switch(action.type)
    {
        case AUTH_LOADING_START :
            return {...state , isAuthLoading : true}
            
        case AUTH_LOADING_END :
            return {...state , isAuthLoading : false}
        case AUTH:
            
            // setting data to local storage 
            localStorage.setItem( 'profile' , JSON.stringify( { ...action?.data }))

            return { ...state , authData : action?.data , authFail:false }

        case LOGOUT :
            // clear file from local storage
            localStorage.clear()

            return { ...state , authData : null ,authFail:false}
        
        case AUTH_FAIL : 
           
            return {...state , authFail : true , authFailMessage: action.payload}

        default:
            return state
    }
}