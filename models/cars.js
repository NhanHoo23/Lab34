const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    code: String,
    color: String,
    price: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Car', carSchema);