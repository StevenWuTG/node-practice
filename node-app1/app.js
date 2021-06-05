const http = require("http")


const server = http.createServer(function(req,res){
    console.log(req.url, req.method, req.headers)

    res.setHeader("Content-Type", "text/html")
    res.write("<html>")
    res.write("<head><title>MY first page</title><head>")
    res.write("<body><h1>hello from my server</h1></body>")
    res.write("</html>")
    res.end()
    // process.exit()
})

server.listen(3000)