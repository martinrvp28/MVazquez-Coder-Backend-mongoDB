import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
    user: {type: String, required: true},
    message: {type: String, required: true}
});

export const MessagesModel = mongoose.model('message', messagesSchema);