import express from 'express';
import path from 'path'
import posts from "./routes/posts.js"
const port = process.env.PORT || 8080



// initialze express
const app = express()

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')))

// Route
app.use('/api/posts', posts)

app.listen(port, () => {
    console.log(`server is running on ${ port }`)
})