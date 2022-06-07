const DL = require('../DL/controllers/categoriesController')

async function getCategories() {
    const categories = await DL.getCategories()
    if (categories)
        return categories
    else {
        throw 'No categories in the data'
    }
}

async function createCategory(data) {
    const newCategory = await DL.createCategory(data)
    return newCategory
}

async function updateCategory(id,data) {
    const updateCategory = await DL.updateCategory(id,data)
    return updateCategory
}

async function removeCategory(id) {
    const removeCategory = await DL.removeCategory(id)
    return removeCategory
}

module.exports = {getCategories , createCategory , updateCategory ,removeCategory}