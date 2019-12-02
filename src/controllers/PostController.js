const mongoose = require("mongoose");

const Post = mongoose.model("Post");

module.exports = {
  async getallposts(res, req, next) {
    const post = await Post.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "usuario"
        }
      },
      {
        $unwind: "$usuario"
      },
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "post_id",
          as: "comentarios"
        }
      }
    ]);
    return req.json(post);
  },

  async getpostbyid(res, req) {
    const post = await Post.findById(req.params.id);

    return req.json(post);
  },

  async getpostbyuserid(res, req) {
    const posts = await Post.findOne(req.params.user_id);

    return req.json(posts);
  },

  async getpostbylocation(res, req) {
    const posts = await Post.findOne(req.params.post_loc);

    return req.json(posts);
  },

  async getpostbydate(res, req) {
    const posts = await Post.findOne(req.params.post_date);

    return req.json(posts);
  },

  async updatepostbyid(res, req) {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return req.json(post);
  },

  async deletepostbyid(res, req) {
    const post = await Post.findByIdAndRemove(req.params.id);

    return res.send();
  },

  async createpost(req, res) {
    const post = await Post.create(body);

    return res.json(post);
  }
};
