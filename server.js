const express = require('express')
const PORT = 8000
// initialze express
const app = express()

app.get('/', (req, res) => {
    res.send("<h1>Hello</h1>")
})


app.listen(PORT, () => {
    console.log(`server is running on ${ PORT }`)
})