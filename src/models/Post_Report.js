const mongoose = require('mongoose');

const Post_ReportSchema = new mongoose.Schema({

    user_id: {
        type: String,
        required: true,
    },

    post_id: {
        type: String,
        required: true,
    },

    repo_text: {
        type: String,
        required: true,
    },
});

mongoose.model('Post_Report', Post_ReportSchema);