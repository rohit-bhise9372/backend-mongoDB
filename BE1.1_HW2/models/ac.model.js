const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },

    productName: {
      type: String,
      required: true,
    },

    model: {
      type: String,
    },

    ton: {
      type: Number,
      required: true,
    },

    starRating: {
      type: Number,
      min: 1,
      max: 5,
    },

    averageRating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },

    totalRatings: {
      type: Number,
      default: 0,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
    },

    originalPrice: {
      type: Number,
    },

    discountPercentage: {
      type: Number,
    },

    offers: [
      {
        type: String,
      },
    ],

    warranty: {
      type: String,
    },

    variants: [
      {
        type: String,
      },
    ],

    wifiConnectivity: {
      type: Boolean,
      default: false,
    },

    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
