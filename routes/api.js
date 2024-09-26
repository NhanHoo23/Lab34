var express = require('express');
var router = express.Router();

const Car = require('../models/cars');

//Thêm dữ liệu vào database
router.post('/add-car', (req, res) => {
    const data = req.body;
    const newCar = new Car({
        code: data.code,
        color: data.color,
        price: data.price
    });
    newCar.save()
        .then(() => {
            res.send('Car added to database');
        })
        .catch((error) => {
            res.send('Error adding car to database' + error);
        });
});

//Lấy dữ liệu từ database
router.get('/get-list-car', (req, res) => {
    Car.find()
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.send('Error getting car from database' + error);
        });
});

module.exports = router;