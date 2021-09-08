import axios from 'axios';

const API = axios.create( { baseURL : 'http://localhost:5000' } )
// we just created an axios instance with base url set at shown
// all api calls are made on top of this base url

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = ( id , updatedPost) => API.patch(`/posts/${id}`, updatedPost) // /posts/id ;
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const updateLikes = (id) => API.patch(`/posts/${id}/likePost`)

//auth

export const signUp =  (authFormData) => API.post('/user/signup' , authFormData)
export const signIn =  (authFormData) => API.post('/user/signin' , authFormData)

