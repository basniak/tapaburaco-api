const mongoose = require("mongoose");

const Post_ImageSchema = new mongoose.Schema({
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true
  },

  image: {
    type: String,
    required: true
  }
});

mongoose.model("Post_Image", Post_ImageSchema);
