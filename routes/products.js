const express = require("express");
// const { isAuthenticated } = require("../middlewares/auth.js");
// const { isSeller } = require("../middlewares/isSeller.js");
const {
  addProducts,
  removeProducts,
  updateProducts,
  getProducts,
  searchProducts,
  getOneProduct,
  productNumbers,
} = require("../controllers/products.js");

const router = express.Router();

router.post("/add_product", addProducts);
router.delete("/remove_product/:id/:productId", removeProducts);
router.put("/update_product/:id/:productId", updateProducts);

// Get Request routes
router.get("/get_all_Products", getProducts);
router.get("/search/:searchString", searchProducts);
router.get("/product/:productId", getOneProduct);
router.get("/count", productNumbers);

module.exports = router;
