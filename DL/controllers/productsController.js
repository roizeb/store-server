require('../../db')
const productModel = require('../models/productsModel')
const categoryModel = require('../models/categoriesModel')
// const allProducts = require('../../DL/products.json')

// async function createAll() {
//     const categories = await categoryModel.find()
//     return await productModel.insertMany(
//         allProducts.map(pr => ({...pr , category:categories
//             .find(c => c.name == pr.category)._id}) )
//     )
// }

// createAll()

async function getAll() {
    return await productModel.find()
}

async function createProduct(data) {
    const newProduct = await productModel.create(data)
    return newProduct;
}

async function updateProduct(id, data) {
    const updateProduct = await productModel.findByIdAndUpdate(id, data,{new:true})
    return updateProduct;
}

async function removeProduct(id) {
    const removeProduct = productModel.findByIdAndDelete(id)
    return removeProduct
}

module.exports = { getAll, createProduct , updateProduct , removeProduct }