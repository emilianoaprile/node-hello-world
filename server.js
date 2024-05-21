const http = require("http");
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost"

http
    .createServer((req, res) => {
        res.writeHead(200, {
            "Content-type" : "text/html"
        });
        res.end("Hello-world")
    })
    .listen(port, host, () => {
        const serverUrl = `http://${host}:${port}`
        console.log(`Server avviato su ${serverUrl}`)
    })