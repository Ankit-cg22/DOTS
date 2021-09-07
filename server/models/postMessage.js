// here we define the model for the collection to store posts

import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title : String,
    message : String ,
    author : String ,
    tags : [String] , // array of strings
    selectedFile : String,
    likeCount: {
        type : Number ,
        default : 0 
    },
    createdAt: {
        type : Date,
        default : new Date()
    },
})

const PostMessage = mongoose.model('PostMessage' , postSchema);
// here we created a model named PostMessage which will make use of the scheme named 'postSchema'

export default PostMessage;

// on this given model we can run CRUD commands