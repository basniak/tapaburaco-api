const mongoose = require('mongoose');

const Post_Image = mongoose.model('Post_Image');

module.exports = {
    async getallpost_imagebypostid(req, res) {
        const post_images = await Post_Image.findOne(req.post_id);

        return res.json(post_images);
    },

    async createpost_image(req, res) {
        const post_images = await Post_Image.create(req.body);

        return res.json(post_images);
    },

    async updatepost_imagebyid(req, res) {
        const post_image = await Post_Image.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(post_image);
    },

    async deletepost_imagebyid(req, res) {
        const post_image = await Post_Image.findByIdAndRemove(req.params.id);

        return res.send();
    }
};