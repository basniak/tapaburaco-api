const mongoose = require("mongoose");

const Comment = mongoose.model("Comment");

module.exports = {
  async getallcommentsbypostid(req, res) {
    const comments = await Comment.findOne(req.post_id);

    return res.json(comments);
  },

  async createcomment(req, res) {
    const comment = await Comment.create(req.body);

    return res.json(comment);
  },

  async updatecommentbyid(req, res) {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(comment);
  },

  async deletecommentbyid(req, res) {
    const comment = await Comment.findByIdAndRemove(req.params.id);

    return res.send();
  }
};
