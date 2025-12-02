import express from "express"
import {
    addProduct,
    deleteProduct,
    //editProduct,
    getAllProducts,
    getProductById
} from "../Controllers/products.controllers.js"
import { authentication } from "../Middlewares/authentication.js"

const routes = express.Router()

routes.get("/products", getAllProducts)

routes.get("/products/:id", getProductById)

routes.post("/products/create", authentication, addProduct)

routes.delete("/products/:id", authentication, deleteProduct)

//routes.put("/products/:id", editProduct)

//routes.post("/products", )


export default routes;