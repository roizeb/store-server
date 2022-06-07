require('../../db')

const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: mongoose.Types.ObjectId,ref:"categories", required: true },
    image: { type: String, required: false },
    rating: {
        rate: { type: Number, required: false },
        count: { type: Number, required: false }
    }
})

const productModel= mongoose.model("products",productSchema)
module.exports = productModel