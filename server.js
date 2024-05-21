const http = require("http");
require('dotenv').config();
const port = process.env.PORT;
const host = process.env.HOST;
// const message = process.env.HELLO_WORLD;
const getRandomPhrase = require('./functions')
const phrases = require('./variables')

http
    .createServer((req, res) => {
        if (req.url === "/favicon.ico") {
            res.writeHead(404, {
                "Content-Type": "text/html"
            });
            res.end(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Not Found</title>
            </head>
            <body>
                <h1>404 - Not Found</h1>
            </body>
            </html>`);
            return;
        }

        if (req.url === "/") {
            const randomPhrase = getRandomPhrase(phrases)

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
        }
    })
    .listen(port, host, () => {
        const serverUrl = `http://${host}:${port}`
        console.log(`Server avviato su ${serverUrl}`)
    })