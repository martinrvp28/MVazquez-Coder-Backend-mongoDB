import MessagesDaoMongoDB from "../daos/mongodb/messages.dao";
const messagesDao = new MessagesDaoMongoDB();

// #PARA CAMBIAR DE PERSISTENCIA DE DATOS

// import MessagesDaoFS from "../daos/filesystem/messages.dao.js";
// const messagesDao = new MessagesDaoFS();

export const getAllMessages = async () => {

    try {
        const response = await messagesDao.getAllMessages();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const addMessage = async (obj) => {
    
    try {
        await messagesDao.addMessage(obj);
    } catch (error) {
        console.log(error);
    }
}