import express from "express";
import { createCustomer } from "../controllers/customercontroller.js";
import { createCustomerMulter } from "../utils/multer.js";

// init router

const router = express.Router();

// router

router.post("/customer", createCustomerMulter, createCustomer);

export default router;
