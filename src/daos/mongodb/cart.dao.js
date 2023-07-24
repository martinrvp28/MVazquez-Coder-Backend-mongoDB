import { CartModel } from "./models/cart.model.js";

export default class CartDaoMongoDB{

    async getAll(){
        try {
            const response = await CartModel.find({});
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async create(obj){

        try {

            const response = await CartModel.create(obj);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id){

        try {
            const response = await CartModel.findById(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async addProductToCart(idCart,idProd){

        try {

            const cart = await CartModel.findById(idCart);
            console.log(cart);
            if (cart){

                const prodExists = cart.products.find(p => p.id === idProd);
                console.log(prodExists);
                if(prodExists){
                    
                    prodExists.quantity = prodExists.quantity + 1;
                    cart.markModified('products');

                } else {

                    const newProd = {
                        id: idProd,
                        quantity: 1
                    }

                    cart.products.push(newProd);
                }

                await cart.save();
                return cart;

            } else return false;


        } catch (error) {
            console.log(error);
        }
    }

}

