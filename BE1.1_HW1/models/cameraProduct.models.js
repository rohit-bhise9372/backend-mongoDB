const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  brrand: String,
  productName: String,
  ratings: Number,
  ratingsCount: Number,
  reviewsCount: Number,
  productPrice: Number,
  productImageUrl: String,
  features: String,
  price: Number,
  originalPrice: Number,
  discount: String,
  delivery: String,
  stock: String,
  warranty: String,
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
