const express = require("express");
const { createProduct, getAllProducts, getCategories, getSingleProduct, deleteProduct, updateProduct, addCode, updateCode, deleteCode, getCodes, addCodes } = require("../controllers/products");

const router = express.Router();

router.route("/create").post(createProduct);
router.route("/").get(getAllProducts);
router.route("/categories").get(getCategories);
router.route("/:id").get(getSingleProduct).delete(deleteProduct).put(updateProduct);

router.post("/:id/codes", addCode); // Add subitem
router.post("/:id/multiple-codes", addCodes); // Add multiple codes (codes)
router.put("/:id/codes/:codeId", updateCode); // Update subitem
router.delete("/:id/codes/:codeId", deleteCode); // Delete subitem
router.get("/:id/codes", getCodes); // Get subitems


module.exports = router;