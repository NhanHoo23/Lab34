const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const local = 'mongodb://localhost:27017/MyDatabase';
const atlas = 'mongodb+srv://NhanHoo23:nhanhoo23@cluster1111.minu5.mongodb.net/MyDatabase?retryWrites=true&w=majority';

const connect = () => {
    mongoose.connect(atlas, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to database');
    })
    .catch((error) => {
        console.log('Error connecting to database: ' + error);
    });
}

module.exports = {connect};