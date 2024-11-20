const express = require('express');
const router = express.Router();

const Category = require('../models/Categories'); 

router.get('/get-categories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.post('/add-category', async (req, res) => {
    const { name } = req.body;
    try {
        const category = new Category({
            name
        });
        await category.save();
        res.status(200).send('Category added');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})



module.exports = router;