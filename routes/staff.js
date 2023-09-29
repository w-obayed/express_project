import express from "express";

import { createStaffController } from "../controllers/staffcontroller.js";
import { createStaffMulter } from "../utils/multer.js";

// init router

const router = express.Router();

// staff router

router.post("/staff", createStaffMulter, createStaffController);

// export default router

export default router;
