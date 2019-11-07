const mongoose = require('mongoose');

const Post_Report = mongoose.model('Post_Report');

module.exports = {
    async getallpost_reportbyuserid(req, res) {
        const post_reports = await Post_Report.findOne(req.user_id);

        return res.json(post_reports);
    },

    async getallpost_reportbypostid(req, res) {
        const post_reports = await Post_Report.findOne(req.post_id);

        return res.json(post_reports);
    },

    async createpost_report(req, res) {
        const post_report = await Post_Report.create(req.body);

        return res.json(post_report);
    },

    async updatepost_reportbyid(req, res) {
        const post_report = await Post_Report.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(post_report);
    },

    async deletepost_reportbyid(req, res) {
        const post_report = await Post_Report.findByIdAndRemove(req.params.id);

        return res.send();
    }
};