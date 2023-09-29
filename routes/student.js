import express from "express";
import { createStudent } from "../controllers/studentcontroller.js";
import { createStudentMulter } from "../utils/multer.js";

// init router

const router = express.Router();

// router

router.post("/student", createStudentMulter, createStudent);

// default router

export default router;
