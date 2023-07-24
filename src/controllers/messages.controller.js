import * as service from '../services/messages.services.js';

export const getAllMessages = async (req,res,next) => {

    try {
        const messages = await service.getAllMessages()
        res.status(200).json(response);
    } catch (error) {
        next(error.message);
    }
}

export const addMessage = async (req, res, next) => {

    try {
        
    } catch (error) {
        next(error.message);
    }
}