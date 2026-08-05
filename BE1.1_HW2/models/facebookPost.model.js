const mongoose = require("mongoose");

const FacebookPostSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },

    profileImage: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
    },

    postImage: {
      type: String,
    },

    postedAt: {
      type: Date,
      required: true,
    },

    likes: {
      type: Number,
      default: 0,
    },

    comments: {
      type: Number,
      default: 0,
    },

    shares: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const FacebookPost = mongoose.model("FacebookPost", FacebookPostSchema);

module.exports = FacebookPost;
