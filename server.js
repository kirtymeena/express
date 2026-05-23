const express = require('express')
const path = require("path")
const port = process.env.PORT || 8080
// initialze express
const app = express()

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')))

let posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
]

// get all posts
app.get("/api/posts/:id", (req, res) => {
    console.log(req.params.id) //http://localhost:8000/api/posts/1 --> req.params returns an object {'id':'1'}
    console.log(req.query.limit) //http://localhost:8000/api/posts?limit=2 --> req.query returns an object {limit:2}
    const id = parseInt(req.params.id)
    res.json(posts.filter(post => post.id === id))
})



app.listen(port, () => {
    console.log(`server is running on ${ port }`)
})