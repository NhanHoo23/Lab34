const mongoose = require('mongoose');
const db = 'mongodb+srv://NhanHoo23:nhanhoo23@cluster1111.minu5.mongodb.net/Planta'

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = { connectDB };
