const BL = require('../BL/categoriesFN')

const
    express = require('express'),
    app = express.Router()

app.get('/categories', async (req, res) => {
    try {
        const categories = await BL.getCategories()
        res.send(categories)
    } catch (error) {
        res.status(400).send(error);
    }
})

app.post('/categories', async (req, res) => {
    try {
        const newCategory = await BL.createCategory(req.body)
        res.send(newCategory)
    } catch (error) {
        res.status(400).send(error);
    }
})

app.put('/categories', async (req, res) => {
    try {
        const updateCategory = await BL.updateCategory(req.query, req.body)
        res.send(updateCategory)
    } catch (error) {
        res.status(400).send(error);
    }
})

app.delete('/categories',async (req,res)=>{
    try {
        const removeCategory = await BL.removeCategory(req.query)
        res.send(removeCategory)
    } catch (error) {
        res.status(400).send(error);
    }
})
module.exports = app

