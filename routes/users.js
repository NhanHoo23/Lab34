var express = require('express');
var router = express.Router();

const User = require('../models/Users');

router.get('/get-users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.post('/register', async (req, res) => {
    const { name, email, password, phoneNumber } = req.body;
    try {
        const existUser = await User.findOne({ $or: [{ email: email }, { phoneNumber: phoneNumber }] });
        if(existUser) {
            console.log('Đã có');
            return res.status(404).send('Đã có');
        } 
        const user = new User({
            name,
            email,
            password,
            phoneNumber
        });
        await user.save();

        res.status(200).send('User added');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.post('/login', async (req, res) => {
    const { emailOrPhone, password } = req.body;
    try {
        const user = await User.findOne({ $or: [{ email: emailOrPhone }, { phoneNumber: emailOrPhone }] });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        if (user.password !== password) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        res.status(200).json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.put('/update/:id', async (req, res) => {
    const { name, email, address, phoneNumber, avatar } = req.body;
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }

        user.name = name;
        user.email = email;
        user.address = address;
        user.phoneNumber = phoneNumber;
        user.avatar = avatar;

        const userUpdate = await user.save();
        res.status(200).json({ user: userUpdate });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }   
})


module.exports = router;
