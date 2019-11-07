const mongoose = require('mongoose');

const Like = mongoose.model('Like');

module.exports = {
    async getalllikesbypostid(req, res) {
        const likes = await Like.findOne(req.post_id);

        return res.json(likes);
    },

    async createlike(req, res) {
        const like = await Like.create(req.body);

        return res.json(like);
    },

    async updatelikebyid(req, res) {
        const like = await Like.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(like);
    },

    async deletelikebyid(req, res) {
        const like = await Like.findByIdAndRemove(req.params.id);

        return res.send();
    }
};