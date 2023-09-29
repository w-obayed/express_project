import multer, { diskStorage } from "multer";

// disstroage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "staffPhoto") {
      cb(null, "public/staff");
    } else if (file.fieldname === "customerPhoto") {
      cb(null, "public/customer");
    } else if (file.fieldname === "studentPhoto") {
      cb(null, "public/student");
    } else if (file.fieldname === "userPhoto") {
      cb(null, "public/img");
    } else if (file.fieldname === "userCv") {
      cb(null, "public/cv");
    } else if (file.fieldname === "productPhoto") {
      cb(null, "public/products");
    }
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + Math.floor(Math.random() * 10000) + "_" + file.originalname
    );
  },
});

// multer middleware

export const createCustomerMulter = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
}).single("customerPhoto");
export const createStaffMulter = multer({ storage }).single("staffPhoto");
export const createStudentMulter = multer({ storage }).array(
  "studentPhoto",
  15
);
export const createUserMulter = multer({ storage }).fields([
  {
    name: "userPhoto",
    maxCount: 1,
  },
  {
    name: "userCv",
    maxCount: 1,
  },
]);

export const createProductMulter = multer({ storage }).single("productPhoto");
