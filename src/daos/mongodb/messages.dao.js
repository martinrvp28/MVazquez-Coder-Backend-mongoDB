import { MessagesModel } from "./models/messages.model.js";


export default class MessagesDaoMongoDB{

    async getAll() {

        try {
            const response = await MessagesModel.find({});
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async addMessage(obj) {
        
        try {
            await MessagesModel.create(obj);
        } catch (error) {
            console.log(error);
        }

    }
}