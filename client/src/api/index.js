import axios from 'axios';

const API = axios.create( { baseURL : 'https://dots-backend-cg.herokuapp.com' } )
// const API = axios.create( { baseURL : 'http://localhost:5000' } )
// we just created an axios instance with base url set at shown
// all api calls are made on top of this base url

// adding the token(if it exists) to all the requests
API.interceptors.request.use( (req) =>{
    if( localStorage.getItem('profile'))
    {
        req.headers.authorization =  `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
})

export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?search=${searchQuery.search || 'none' }&tag=${searchQuery.tag || 'none'}` )
export const fetchPostById = (id) => API.get(`/posts/${id}`)
export const fetchPostsByUserId = (id) => API.get(`/posts/user/${id}`)

export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = ( id , updatedPost) => API.patch(`/posts/${id}`, updatedPost) // /posts/id ;
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const updateLikes = (id) => API.patch(`/posts/${id}/likePost`)

export const postComment= (commentString , id ) => API.post(`/posts/${id}/postComment` , {commentString})

//auth

export const signUp =  (authFormData) => API.post('/user/signup' , authFormData)
export const signIn =  (authFormData) => API.post('/user/signin' , authFormData)

