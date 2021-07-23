const http = require('http')
const express = require('express')

const app = express()

app.use('/users',(req, res, next) => {
    console.log("in middleware users")
    res.send("<h1> /users middleware</h1>")
    // next()

})

app.use('/', (req, res, next) => {
    console.log('/ middleware')
    res.send('<h1> / middleware</h1>')
})



const server = http.createServer(app);

server.listen(3000);
