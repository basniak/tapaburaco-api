const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
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