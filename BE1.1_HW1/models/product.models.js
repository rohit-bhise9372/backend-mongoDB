const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  brand: String,
  productName: String,
  category: String,
  productInfo: String,

  color: [
    {
      type: String,
    },
  ],

  size: [
    {
      type: Number,
    },
  ],

  price: Number,

  productImageUrl: String,
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
