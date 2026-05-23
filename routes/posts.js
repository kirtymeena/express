import express from 'express'
const router = express.Router()

let posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
]


// get limited posts
router.get('/', (req, res, next) => {
    console.log(req.query)
    const limit = parseInt(req.query.limit)
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit))
    }
    res.status(400).json({ msg:  "Invalid query" })

})

// get single post
router.get("/:id", (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id)

    if (!post) {
        const error = new Error(`A Post with the id of ${ id } was not found`)
        return next(error)
        // return res.status(404).json({ msg: `post with the id ${ id } was not found` })
    }

    res.status(200).json(post)

})

// Create new Post
router.post("/", (req, res, next) => {
    console.log(req.body)
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }
    if (!newPost.title) {
        const error = new Error(`Please use title property`)
        return next(error)
    }
    posts.push(newPost)
    res.status(201).json(posts)
})


// update post
router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id)
    if (!post) {
        const error = new Error(`Post with ${ id } was not found`)
        return next(error)
    }
    // updating the title if the requested post id
    post.title = req.body.title
    res.status(200).json(post)
})


// Delete post
router.delete("/:id", (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.filter(post => post.id !== id)
    if (!post) {
        const error = new Error(`Post with Id ${ id } was not found`)
        return next(error)
    }
    res.status(200).json(post)
})


export default router