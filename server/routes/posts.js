import express from 'express';

import { getPosts, createPost, updatePost, deletePost, updateLikes } from '../controllers/posts.js'
import auth from '../middleware/auth.js'

const router = express.Router();

// show the posts
router.get('/', getPosts);

// create a post
router.post('/', auth, createPost);

//patch (update)
router.patch('/:id', auth, updatePost)

// delete a post
router.delete('/:id', auth, deletePost)

//like a post
router.patch('/:id/likePost', auth, updateLikes)

export default router;