const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
    async getallusers(req, res) {
        const users = await User.find();

        return res.json(users);
    },

    async getuserbyid(req, res) {
        const user = await User.findById(req.params.id);

        return res.json(user);
    },

    async getuserbyemail(req, res) {
        const user = await User.findOne(req.params.user_email);

        return res.json(user);
    },

    async createuser(req, res) {
        const user = await User.create(req.body);

        return res.json(user);
    },

    async updateuserbyid(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(user);
    },

    /*async updateuserbyemail(req, res) {
        const user = await User.findOneAndUpdate(req.params.user_email, req.body, { new: true });

        return res.json(user);
    },*/

    async destroyuserbyid(req, res) {
        await User.findByIdAndRemove(req.params.id);

        return res.send();
    },

    /*async destroyuserbyemail(req, res) {
        await User.findOneAndRemove(req.params.email);

        return res.send();
    },*/
};