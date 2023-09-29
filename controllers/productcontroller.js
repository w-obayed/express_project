// create product

import { createSlug, generateRandomId } from "../helpers/helper.js";
import fs from "fs";

export const createProduct = (req, res) => {
  const { name, regularprice, sellprice, stock } = req.body;

  if (!name || !regularprice) {
    return res
      .status(400)
      .json({ message: "Product name and price are required" });
  }

  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

  // product name check

  if (productData.some((data) => data.slug === createSlug(name))) {
    return res.status(400).json({ message: "Product already exists" });
  }

  const product = {
    id: generateRandomId(),
    name,
    slug: createSlug(name),
    regularprice,
    sellprice,
    stock,
    photo: req.file.filename,
  };

  productData.push(product);
  fs.writeFileSync("db/product.json", JSON.stringify(productData));
  res.redirect("/");
};

// get all product

export const getAllProduct = (req, res) => {
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
  if (productData.length === 0) {
    res.status(404).json({
      message: "Product data not found",
    });
  }

  res.status(200).json({ product: productData });
};
// single data show
export const getSingleProduct = (req, res) => {
  const { slug } = req.params;

  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

  const singleProduct = productData.find((item) => item.slug === slug);

  if (!singleProduct) {
    res.status(404).json({ message: "Single product not found" });
    return;
  }

  res.status(200).json(singleProduct);
};
// delete product
export const deleteProduct = (req, res) => {
  const { id } = req.params;

  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

  const updateData = productData.filter((data) => data.id !== id);

  fs.writeFileSync("db/product.json", JSON.stringify(updateData));
  res.redirect("/");
};

// showProductPage

export const showProductPage = (req, res) => {
  // get all product
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

  res.render("product", { product: productData });
};

export const createProductPage = (req, res) => {
  res.render("create");
};
export const singleProductPage = (req, res) => {
  const { slug } = req.params;
  // get all product
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

  // find single product
  const singleProduct = productData.find((data) => data.slug === slug);
  res.render("single", {
    product: singleProduct,
  });
};

// edit product
export const showEditProduct = (req, res) => {
  const { id } = req.params;
  // get all product
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

  // find single product
  const editProduct = productData.find((data) => data.id === id);
  res.render("edit", {
    product: editProduct,
  });
};

export const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, regularprice, sellprice, stock } = req.body;

  // get all product
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

  let photo_name =
    productData[productData.findIndex((data) => data.id === id)].photo;

  if (req?.file?.filename) {
    photo_name = req.file.filename;
  }

  productData[productData.findIndex((data) => data.id === id)] = {
    id: id,
    name,
    slug: createSlug(name),
    regularprice,
    sellprice,
    stock,
    photo: photo_name,
  };
  fs.writeFileSync("db/product.json", JSON.stringify(productData));
  res.redirect("/");
};
