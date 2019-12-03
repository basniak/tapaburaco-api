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

    default: 0
  },
  post_solved: {
    type: Number,
    default: 0
  },
  post_com: {
    type: Number,
    default: 0
  },
  isDeleted: { type: Boolean, default: false },
  createdon: { type: Date, default: Date.now },
  modifiedon: { type: Date, default: Date.now() },
}, { timestamps: true });


mongoose.model("Post", PostSchema);
