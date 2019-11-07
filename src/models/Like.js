const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({

    user_id: {
        type: String,
        required: true,
    },

    post_id: {
        type: String,
        required: true,
    },
});

mongoose.model('Like', LikeSchema);