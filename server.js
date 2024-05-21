const http = require("http");
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost"
require('dotenv').config();
const message = process.env.HELLO_WORLD;

http
    .createServer((req, res) => {
        res.writeHead(200, {
            "Content-type" : "text/html"
        });
        res.end(`<h1>${message}</h1>`)
    })
    .listen(port, host, () => {
        const serverUrl = `http://${host}:${port}`
        console.log(`Server avviato su ${serverUrl}`)
    })