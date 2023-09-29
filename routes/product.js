import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
  showProductPage,
  createProductPage,
  singleProductPage,
  showEditProduct,
  updateProduct,
} from "../controllers/productcontroller.js";
import { createProductMulter } from "../utils/multer.js";

// init router

const router = express.Router();

// ejs routes

router.get("/", showProductPage);
router.get("/create", createProductPage);
router.get("/single/:slug", singleProductPage);
router.get("/edit/:id", showEditProduct);

//api router
router.post("/product", createProductMulter, createProduct);
router.get("/product", getAllProduct);
router.get("/product/:slug", getSingleProduct);
router.get("/product-delete/:id", deleteProduct);
router.post("/product/:id", createProductMulter, updateProduct);

// default router

export default router;
