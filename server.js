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
app.get("/api/posts", (req, res) => {
    const limit = parseInt(req.query.limit)

    // isNAN(limit) -> checks if the limit is a number or not because in query user can add sql query as well and mess things up (SQL injection)
    if (!isNaN(limit) && limit > 0) {
        res.json(posts.slice(0, limit))
    }
    else {
        res.json(posts)
    }
})



app.listen(port, () => {
    console.log(`server is running on ${ port }`)
})