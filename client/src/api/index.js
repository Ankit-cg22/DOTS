import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = ( id , updatedPost) => axios.patch(`${url}/${id}`, updatedPost) // /posts/id ;
export const deletePost = (id) => axios.delete(`${url}/${id}`)
export const updateLikes = (id) => axios.patch(`${url}/${id}/likePost`)

//auth( will move to other folder )

export const signUp =  () => console.log("signup tried")
export const signIn =  () => console.log("signIn tried")
