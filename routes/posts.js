import express from 'express'
import { createNewpost, deletePost, getPost, getSinglePost, updatePost } from '../controllers/postController.js'

const router = express.Router()



// get limited posts
router.get('/', getPost)

// get single post
router.get("/:id", getSinglePost)

// Create new Post
router.post("/", createNewpost)


// update post
router.put('/:id', updatePost)


// Delete post
router.delete("/:id", deletePost)


export default router