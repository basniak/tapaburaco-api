const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    user_email: {
        type: String,
        required: true,
        unique: true,
    },
    user_password: {
        type: String,
        required: true,
    },
    user_birthday: {
        type: Date,
        required: true,
    },
    user_adress: {
        type: String,
        required: true,
    },
    user_image: {
        type: String,
        required: true,
    },
    user_type: {
        type: Number,
        required: true,
    },
});

mongoose.model('User', UserSchema);