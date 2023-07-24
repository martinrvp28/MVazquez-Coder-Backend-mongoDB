import CartDaoMongoDB from "../daos/mongodb/cart.dao.js";
const cartDao = new CartDaoMongoDB();

// #PARA CAMBIAR DE PERSISTENCIA DE DATOS

// import CartDaoFS from "../daos/filesystem/cart.dao.js";
// const cartDao = new CartDaoFS();

export const getAll = async () => {

    try {
        const response = await cartDao.getAll();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const create = async () => {
    
    try {
        const item = await cartDao.create();
        if(!item) return false;
        else return item;
        
    } catch (error) {
        console.log(error);
    }
}

export const getById = async (id) => {

    try {
        const item = await cartDao.getById(id);
        if (!item) return false;
        else return item;
        
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const addProductToCart = async (cartId,prodId) => {

    try {
        console.log(cartId);
        const response = await cartDao.addProductToCart(cartId,prodId);
        return response;
    } catch (error) {
        console.log(error);
    }
}