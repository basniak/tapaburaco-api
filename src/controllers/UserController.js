const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
    async getallusers(req, res) {
        const users = await User.find();
        if (user) {
            return res.json(users);
        }
        else { return req.error({ error: 'usario nao encontrado' }) }
    },

    async getuserbyid(req, res) {
        const user = await User.findOne({ uid: req.query.id });

        return res.json(user);
    },

    async getuserbyemail(req, res) {
        const user = await User.findOne(req.params.user_email);

        return res.json(user);
    },

    async createuser(req, res, next) {
        console.log('createuser',req.body)
        return User.create(req.body, (err, data) => {
            if (err) {
                console.log(err);
                console.log(new Date().toLocaleString(), err.messagem);
                next(err);
            } else res.json(data);
        })
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