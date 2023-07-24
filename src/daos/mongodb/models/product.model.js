import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    code: {type: String, required: true},
    stock: {type: Number, required: true},
    category: {type: String, required: true},
});

export const ProductModel = mongoose.model('products', productSchema);