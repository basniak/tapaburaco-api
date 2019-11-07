const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({

    user_id: {
        type: String,
        required: true,
    },

    post_id: {
        type: String,
        required: true,
    },

    com_date: {
        type: Date,
        default: Date.now,
    },

    com_text: {
        type: String,
        required: true,
    },
});

mongoose.model('Comment', CommentSchema);