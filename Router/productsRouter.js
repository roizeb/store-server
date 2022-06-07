const BL = require('../BL/productsFN')

const
    express = require('express'),
    app = express.Router()

app.get('/products', async (req, res) => {
    try {
        const prodacts = await BL.getAll()
        res.send(prodacts)
    } catch (error) {
        res.status(400).send(error);
    }
})

app.post('/products', async (req, res) => {
    try {
        const newProduct = await BL.createProduct(req.body)
        res.send(newProduct)
    } catch (error) {
        res.status(400).send(error);
    }
})

app.put('/products', async (req, res) => {
    try {
        const updateProduct = await BL.updateProduct(req.query, req.body)
        res.send(updateProduct)
    } catch (error) {
        res.status(400).send(error);
    }
})

app.delete('/products',async (req,res)=>{
    try {
        const removeProduct = await BL.removeProduct(req.query)
        res.send(removeProduct)
    } catch (error) {
        res.status(400).send(error);
    }
})


module.exports = app

