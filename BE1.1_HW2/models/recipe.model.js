const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
  {
    recipeName: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    servings: {
      type: Number,
      required: true,
    },

    prepTime: {
      type: Number, // in minutes
      required: true,
    },

    cookingTime: {
      type: Number, // in minutes
      required: true,
    },

    ingredients: [
      {
        type: String,
      },
    ],

    directions: [
      {
        type: String,
      },
    ],

    notes: {
      type: String,
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

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
