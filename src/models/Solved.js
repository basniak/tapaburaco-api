const mongoose = require('mongoose');

const SolvedSchema = new mongoose.Schema({

    user_id: {
        type: String,
        required: true,
    },

    post_id: {
        type: String,
        required: true,
    },
});

mongoose.model('Solved', SolvedSchema);