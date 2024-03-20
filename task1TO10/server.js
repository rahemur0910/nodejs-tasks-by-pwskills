const http = require('http');

//create an http server

const server = http.createServer((req,res) =>
{
    res.writeHead(200,{'Content-Type':'text/plain'});

    const message = "I am Happy to Learn Full Stack Web Development From Pwskills!\n";
    res.end(message);
})

//set the port

const port = 5500;

