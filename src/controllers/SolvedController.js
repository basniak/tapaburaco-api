const mongoose = require('mongoose');

const Solved = mongoose.model('Solved');

module.exports = {
    async getallsolvedbypostid(req, res) {
        const solveds = await Like.findOne(req.post_id);

        return res.json(solveds);
    },

    async createsolved(req, res) {
        const solved = await Solved.create(req.body);

        return res.json(solved);
    },

    async updatesolvedbyid(req, res) {
        const solved = await Solved.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(solved);
    },

    async deletesolvedbyid(req, res) {
        const solved = await Solved.findByIdAndRemove(req.params.id);

        return res.send();
    }
};