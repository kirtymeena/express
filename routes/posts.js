import express from 'express'
const router = express.Router()

let posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
]

// get limited posts
router.get('/', (req, res) => {
    console.log(req.query)
    const limit = parseInt(req.query.limit)
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit))
    }
    res.status(400).json({ msg: "Invalid query" })

})

// get single post
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id)

    if (!post) {
        return res.status(404).json({ msg: `post with the id ${ id } was not found` })
    }

    res.status(200).json(post)

})

// Create new Post
router.post("/", (req, res) => {
    console.log(req.body)
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }
    if (!newPost.title) {
        return res.status(400).json({ msg: "something went wrong" })
    }
    posts.push(newPost)
    res.status(201).json(posts)
})

export default router