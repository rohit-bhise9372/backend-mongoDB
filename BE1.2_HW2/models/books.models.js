const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    publishedYear: {
      type: Number,
      required: true,
    },

    genre: [
      {
        type: String,
        enum: [
          "Fiction",
          "Historical",
          "Fantasy",
          "Mystery",
          "Thriller",
          "Romance",
          "Non-Fiction",
          "Self-help",
          "Science",
          "Biography",
          "Other",
        ],
      },
    ],

    language: {
      type: String,
      default: "English",
    },

    country: {
      type: String,
      default: "Unknown",
    },

    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },

    summary: {
      type: String,
    },

    coverImageUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
