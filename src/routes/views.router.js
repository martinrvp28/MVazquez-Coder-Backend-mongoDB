import { Router } from "express";
import ProductManager from "../managers/productManager.js";
const router = Router();
import { __dirname } from "../utils.js";


const productManager = new ProductManager(__dirname + '/db/products.json');

router.get('/', async (req,res) => {

    try {
        const products = await productManager.getProducts();
        res.render('home', {products})
    } catch (error) {
        
    }
    
});

router.get('/realtimeproducts', (req,res) => {

    res.render('realTimeProducts')

});

router.get('/chat', (req,res) => {
    res.render('chat');
});

export default router;