function getRandomPhrase(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    console.log(randomIndex)
    return array[randomIndex]
}

module.exports = getRandomPhrase