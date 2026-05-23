const express = require('express')
const path = require("path")
const PORT = 8000
// initialze express
const app = express()

// setup static folder
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
    console.log(`server is running on ${ PORT }`)
})