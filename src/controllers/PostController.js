const mongoose = require('mongoose');

const Post = mongoose.model('Post');

module.exports = {
    async getallposts(res, req) {
        const posts = await Post.find();

        return res.json(posts);
    },

    async getpostbyid(res, req) {
        const post = await Post.findById(req.params.id);

        return res.json(post);
    },

    async getpostbyuserid(res, req) {
        const posts = await Post.findOne(req.params.user_id);

        return res.json(posts);
    },

    async getpostbylocation(res, req) {
        const posts = await Post.findOne(req.params.post_loc);

        return res.json(posts);
    },

    async getpostbydate(res, req) {
        const posts = await Post.findOne(req.params.post_date);

        return res.json(posts);
    },

    async updatepostbyid(res, req) {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(post);
    },

    async deletepostbyid(res, req) {
        const post = await Post.findByIdAndRemove(req.params.id);

        return res.send();
    },

    async createpost(req, res) {
        const post = await Post.create(req.body);

        return res.json(post);
    }
};