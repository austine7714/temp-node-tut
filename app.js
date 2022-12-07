const http = require('http')


const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end("'Welcome to the home page of Bomach enterprise'")
    }
    if(req.url === '/about'){
        res.end("Bomach group of companies is a multifaceted group of company based in Enugu nigeria")
    }
  res.end(`
    <h1>oOps</h1>
    <p> We can't seem to find the page you are looking for.</p>
    <a href ="/">Home Page</a>
  `)
})


server.listen(5000)
