const DL = require('../DL/controllers/productsController')

async function getAll(id) {
    const prodacts = await DL.getAll()
    if (!id) {
        return prodacts
    }
    else {
        const item = prodacts.find(p => p.id = id)
        if (item)
            return item
        else {
            throw 'No prodacts with this id'
        }
    }
}

async function createProduct(data) {
    const newProduct = await DL.createProduct(data)
    return newProduct
}

async function updateProduct(id , data) {
    const updateProduct = await DL.updateProduct(id,data)
    return updateProduct
}

async function removeProduct(id) {
    const removeProduct = await DL.removeProduct(id)
    return removeProduct 
}

module.exports ={getAll , createProduct , updateProduct , removeProduct}