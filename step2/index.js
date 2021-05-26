const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

function getCatalog() {
    console.log('start to read config from file')
    const rawData = fs.readFileSync('conf/catalog.json')
    return JSON.parse(rawData)
}

app.get('/', (req, res) => {
    res.send('Hello World! ' + getOderId())
})

app.get('/catalogItems', (req, res) => {
    res.json(getCatalog());
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})