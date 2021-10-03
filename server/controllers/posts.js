// all the handlers for routes
// routes /posts.js -> all the routes are declared
// controllers /posts.js -> all the routes are defined

import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js'

export const getPosts = async(req , res)=> {
    try {
        // if everything is successful
        
        //retrive all the posts ,present in the data base
        const postMessages = await PostMessage.find(); 
                                // model

        res.status(200).json(postMessages);        
        // we respond with the array of posts
        // 
    } catch (error) {
        // if error occurs
    
        res.status(404).json( { message : error.message});

    }
}

export const createPost = async(req , res)=> {

    const post = req.body;
    // we will get a req json(containing data filled by author)

    // create new post in the db using this postBody

    const newPost = new PostMessage({ ...post , author : req.userId , createdAt: new Date().toISOString() }); // we save it to the db using the model

    try {
        await newPost.save();
        // try saving it to the db

        res.status(201).json(newPost);
    } catch (error) {
        console.log(error)
        res.status(409).json({message : error.message});
    }
}


export const updatePost = async( req ,res) => {
    const { id  } = req.params;
    // the parameter in the url is named id
    // we renamed it to _id

    const post = req.body;
    // the updated post that we receive from front end

    // check with mongoose if any post with that id exists or not
    if( !(mongoose.Types.ObjectId.isValid(id)) ) return res.status(404).send(`No post with id : ${id}`);

    const updatedPost = await PostMessage.findByIdAndUpdate( id , {...post , id}, {new : true});

    // the post object does not have the id , so we spread it and also send the id with it , it wil be used by the db
    res.json(updatedPost);
}

export const updateLikes = async(req  , res) => {
    const { id } = req.params;

    // check if user is authenticated
    if( !req.userId)return rese.json({message : "User is not authenticated!!"});

    // check with mongoose if any post with that id exists or not
    if( !(mongoose.Types.ObjectId.isValid(id)) ) return res.status(404).send(`No post with id : ${id}`);

    const post = await PostMessage.findById(id);


    // TO CHECK IF HE HAS ALREADY LIKED 

    // we maintain a list of all ids that have liked a post

    // check for the id in the 'haveLiked' list
    const index = post.likes.findIndex((id) => id === String(req.userId)); 

    if( index === -1 )
    {
        // not found in the list , not liked before , like it , push into list
        post.likes.push(req.userId)

    }else{
        //id found , have liked before , now unlike , delete from list
        post.likes = post.likes.filter( (id) => id !== String(req.userId))
    }


    const updatedPost = await PostMessage.findByIdAndUpdate( id , post , {new : true})
    // simply pass the updated post in update request to the db

    res.json(updatedPost);
}

export const deletePost = async(req, res) => {

    const {id} = req.params;

    // check with mongoose if any post with that id exists or not
    if( !(mongoose.Types.ObjectId.isValid(id)) ) return res.status(404).send(`No post with id : ${id}`);
    
    await PostMessage.findByIdAndRemove( id );

    res.json( {message : "Post deleted successfully"})

}