const http = require("http");
require('dotenv').config();
const port = process.env.PORT;
const host = process.env.HOST;
const message = process.env.HELLO_WORLD;

const phrases = [
    "La vita è per il 10% cosa ti accade e per il 90% come reagisci.",
    "Se vuoi qualcosa che non hai mai avuto, devi fare qualcosa che non hai mai fatto.",
    "Prima ti ignorano, poi ti deridono, poi ti combattono. Poi vinci."
];
console.log(phrases);

function getRandomPhrase(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    console.log(randomIndex)
    return array[randomIndex]
}

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