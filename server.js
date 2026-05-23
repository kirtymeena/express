import express from 'express';
import path from 'path'
import posts from "./routes/posts.js"
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
const port = process.env.PORT || 8080



// initialze express
const app = express()

// body parse middleware -  takes care of raw json
app.use(express.json())
app.use(express.urlencoded({ extended: false })) //this will allow us to send form data

// logger middleware
app.use(logger)

// Routes
app.use('/api/posts', posts)

// error handler middleware
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server is running on ${ port }`)
})