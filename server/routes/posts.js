import express from 'express';

import {getPosts , createPost , updatePost , deletePost , updateLikes} from '../controllers/posts.js'

const router = express.Router();

// show the posts
router.get('/' , getPosts);

// create a post
router.post('/' , createPost);

//patch (update)
router.patch('/:id' , updatePost)

// delete a post
router.delete('/:id' , deletePost)

//like a post
router.patch('/:id/likePost' , updateLikes)

export default router;