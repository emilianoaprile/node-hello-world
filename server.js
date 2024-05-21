const http = require("http");
require('dotenv').config();
const port = process.env.PORT;
const host = process.env.HOST;
// const message = process.env.HELLO_WORLD;
const getRandomPhrase = require('./functions')
const phrases = require('./variables')

const randomPhrase = getRandomPhrase(phrases)
console.log(randomPhrase)

http
    .createServer((req, res) => {
        res.writeHead(200, {
            "Content-type": "text/html"
        });
        res.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello World</title>
        </head>
        <body>
            <h1>${randomPhrase}</h1>
        </body>
        </html>`)
    })
    .listen(port, host, () => {
        const serverUrl = `http://${host}:${port}`
        console.log(`Server avviato su ${serverUrl}`)
    })