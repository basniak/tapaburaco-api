const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    displayName: { type: String, required: true },
    email: { type: String, required: true },
    photoURL: { type: String, required: true },
    uid: { type: String, required: true, index: true },
    cidade: { type: String, required: true },
    estado: { type: String },
    isDeleted: { type: Boolean, default: false },
    createdon: { type: Date, default: Date.now },
    modifiedon: { type: Date, default: Date.now() },
}, { timestamps: true });

mongoose.model('User', UserSchema);