import * as service from "../services/product.services.js";
import mongoose from "mongoose";

export const getAll = async (req, res, next) => {
    try {
        const response = await service.getAll();
        res.status(200).json(response);
    } catch (error) {
        next(error.message);
    }
}

export const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const prod = await service.getById(id);
        if(!prod) res.status(404).json({msg:'Prod not found'})
        else res.json(prod);
    } catch (error) {
        next(error.message);
    }
}

export const create = async (req, res, next) => {
    try {

        const newProd = await service.create(req.body);
        if(!newProd) res.status(404).json({msg:'Validation error'});
        else res.json(newProd);
    } catch (error) {
        next(error.message);
    }
}

export const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (mongoose.Types.ObjectId.isValid(id)){
            const prodUpd = await service.update(id,req.body);
            if(!prodUpd) res.status(404).json({msg:'Prod not found'})
            else res.json(prodUpd);
        } else res.json({msg:'ID not valid'});
        
    } catch (error) {
        next(error.message);
    }
}

export const remove = async (req, res, next) => {
    try {
        const {id} = req.params;
        if (mongoose.Types.ObjectId.isValid(id)){
            const prodDel = await service.remove(id);

            if(!prodDel) res.status(404).json({msg:'Prod not found'})
            else res.json(prodDel);
        } else res.json({msg:'ID not valid'});

    } catch (error) {
        next(error.message);
    }
}