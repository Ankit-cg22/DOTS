// here we define the model for the collection to store posts

import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title : String,
    message : String ,
    name : String,
    author : String ,
    tags : [String] , // array of strings
    selectedFile : String,
    likes: {
        type : [String],
        default :[] 
    },
    createdAt: {
        type : Date,
        default : new Date()
    },
    comments : {
        type :[String],
        default : []
    }
})

const PostMessage = mongoose.model('PostMessage' , postSchema);
// here we created a model named PostMessage which will make use of the scheme named 'postSchema'

export default PostMessage;

// on this given model we can run CRUD commands