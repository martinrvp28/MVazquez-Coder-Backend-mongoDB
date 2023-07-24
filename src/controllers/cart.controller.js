import * as service from "../services/cart.services.js";
import mongoose, { isValidObjectId } from "mongoose";

export const getAll = async (req,res,next) => {
    
    try {
        const response = await service.getAll();
        res.status(200).json(response);
    } catch (error) {
        next(error.message);
    }
}

export const create = async (req, res, next) => {

    try {
        const obj = {products:[]}
        const response = await service.create(obj);
        res.status(200).json(response);
    } catch (error) {
        next(error.message);
    }
}

export const getById = async (req, res, next) => {

    try {
        const {idCart} = req.params;
        console.log(idCart);
        const cart = await service.getById(idCart);
        if (!cart) res.status(404).json({msg:'Cart not found'});
        else res.json(cart);
    } catch (error) {
        next(error.message);
    }
    
}

export const addProductToCart = async (req,res,next) => {

    try {
        const {idCart, idProduct} = req.params;
        console.log(idCart);
        console.log(idProduct);
        const addCart = await service.addProductToCart(idCart,idProduct);
        console.log(addCart);
        if (!addCart) res.status(404).json({msg:'Cart not found ACA'});
        else res.json(addCart);
    } catch (error) {
        next(error.message);
    }

}