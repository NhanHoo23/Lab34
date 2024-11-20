const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        default: ''
    },
    avatar: {
        type: String,
        default: ''
    },
});

module.exports = mongoose.model('User', UserSchema);