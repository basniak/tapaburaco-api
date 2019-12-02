const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  post_date: {
    type: Date,
    default: Date.now
  },

  post_image: [{ type: String, required: true }],

  post_loc: {
    type: String,
    required: true
  },

  post_text: {
    type: String,
    required: true
  },

  post_like: {
    type: Number,
    required: true
  },

  post_solved: {
    type: Number,
    required: true
  },

  post_com: {
    type: Number,
    required: true
  }
});

mongoose.model("Post", PostSchema);
