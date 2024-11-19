const express = require("express");
const { createProduct, getAllProducts, getCategories, getSingleProduct, deleteProduct, updateProduct } = require("../controllers/products");

const router = express.Router();

router.route("/create").post(createProduct);
router.route("/").get(getAllProducts);
router.route("/categories").get(getCategories);
router.route("/:id").get(getSingleProduct).delete(deleteProduct).put(updateProduct);

module.exports = router;