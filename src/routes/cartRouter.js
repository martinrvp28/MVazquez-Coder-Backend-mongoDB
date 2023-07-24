import { Router } from "express";
import { __dirname } from "../utils.js";
import CartManager from "../managers/cartManager.js";

import * as controller from "../controllers/cart.controller.js";

const router = Router();

const cartManager = new CartManager(__dirname + '/db/carts.json');


router.post('/', controller.create);

router.get('/:idCart', controller.getById)

router.post('/:idCart/product/:idProduct', controller.addProductToCart);

export default router;