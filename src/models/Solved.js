const mongoose = require('mongoose');

const SolvedSchema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts",
        required: true,
    },
});

mongoose.model('Solved', SolvedSchema);