const mongoose = require('mongoose');

const Solved = mongoose.model('Solved');

module.exports = {
    async getallsolvedbypostid(req, res) {
        const solveds = await Like.findOne(req.post_id);

        return res.json(solveds);
    },

    async createsolved(req, res, next) {
        // console.log(req.body)
        return Solved.create(req.body, (err, data) => {
            if (err) {
                console.log(err)
                next(err)
            } else {
                res.json(data)
            }
        });
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