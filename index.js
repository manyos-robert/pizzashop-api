const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const nanoid = require('nanoid')

function getCatalog() {
    console.log('start to read config from file')
    const rawData = fs.readFileSync('conf/catalog.json')
    return JSON.parse(rawData)
}

function getOderId() {
    return nanoid.nanoid(5)
}

function getOder(id) {
    console.log('start to read order from file')
    const rawData = fs.readFileSync(`orders/${id}.json`)
    return JSON.parse(rawData)
}

app.get('/', (req, res) => {
    res.send('Hello World! ' + getOderId())
})

app.post('/orders', (req, res) => {
    res.send('Hello World! ' + getOderId())
})

app.get('/orders/:id', (req, res) => {
    const id = req.params.id
    res.json(getOder(id))
})

app.get('/catalog', (req, res) => {
    res.json(getCatalog());
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})