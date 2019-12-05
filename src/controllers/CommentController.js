const mongoose = require("mongoose");

const Comment = mongoose.model("Comment");

module.exports = {
  async getallcommentsbypostid(req, res) {
    const comments = await Comment.findOne(res.post_id);

    return res.json(comments);
  },

  async createcomment(req, res, next) {
    // console.log(req.body)
    return Comment.create(req.body, (err, data) => {
      if (err) {
        console.log(err)
        next(err)
      } else {
        res.json(data)
      }
    });
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
