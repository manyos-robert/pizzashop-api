const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const nanoid = require('nanoid')
const bodyParser = require('body-parser');

// Functions
function getCatalog() {
    console.log('start to read config from file')
    const rawData = fs.readFileSync('conf/catalog.json')
    return JSON.parse(rawData)
}

function calcTotalPrice(items) {
    let totalPrice = 0
    items.forEach(item => {
        totalPrice += (item.price * item.quantity)
    })
    return totalPrice
}

function createOrder(deliveryAddress, phoneNumber, items) {
    //create a new ID first
    const id = getOderId();
    const totalPrice = calcTotalPrice(items)

    const newOrder = {
        id,
        status: 'new',
        deliveryAddress,
        phoneNumber,
        items,
        totalPrice
    }
    console.log('start to write order to file')
    fs.writeFileSync(`orders/${id}.json`, JSON.stringify(newOrder, null, 2));
    return newOrder;
}

function getOderId() {
    return nanoid.nanoid(5)
}

function getOder(id) {
    console.log('start to read order from file')
    const rawData = fs.readFileSync(`orders/${id}.json`)
    return JSON.parse(rawData)
}

//Middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World! ' + getOderId())
})

app.post('/orders', (req, res) => {
    console.log('bpod', req.body)
    const order = createOrder(req.body.deliveryAddress, req.body.phoneNumber, req.body.items)
    res.send(order)
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