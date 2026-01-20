// project/routes/installRoutes.js
import express from "express"; //  import express
import { addProduct } from "../controllers/productController.js"; //  add .js extension

const router = express.Router();

// Example route
router.post("/", addProduct);

export default router; //  ES module export
