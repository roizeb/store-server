require('../../db')
const categoryModel =require ('../models/categoriesModel')
// const allCategory = require('../../DL/categories.json')

async function getCategories() {
    return await categoryModel.find()
}

async function createCategory(data) {
    const newCategory = await categoryModel.create(data)
    return newCategory;
}

async function updateCategory(id, data) {
    const updateCategory = await categoryModel.findByIdAndUpdate(id, data,{new:true})
    return updateCategory;
}

async function removeCategory(id) {
    const removeCategory = categoryModel.findByIdAndDelete(id)
    return removeCategory
}

// async function createAllCategories() {
//     return await categoryModel.insertMany(allCategory)
// }
// createAllCategories()

module.exports = {getCategories , createCategory , updateCategory , removeCategory}