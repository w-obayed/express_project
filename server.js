import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import studentRouter from "./routes/student.js";
import staffRouter from "./routes/staff.js";
import userRouter from "./routes/users.js";
import customerRouter from "./routes/customer.js";
import productRouter from "./routes/product.js";
import EJSLayouts from "express-ejs-layouts";
// confiq dotenv
dotenv.config();
const PORT = process.env.PORT || 6060;

// express init
const app = express();

// use express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static folder
app.use(express.static("public"));

// ejs setup
app.set("view engine", "ejs");
app.use(EJSLayouts);

// routes

app.use(staffRouter);
app.use(userRouter);
app.use(customerRouter);
app.use(studentRouter);
app.use(productRouter);

// listen server
app.listen(PORT, () => {
  console.log(`server is runnig on port ${PORT}`.bgGreen.black);
});
