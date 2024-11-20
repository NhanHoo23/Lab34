const express = require('express');
const router = express.Router();

const PlantType = require('../models/PlantTypes'); 

router.get('/get-plant-types', async (req, res) => {
    try {
        const plantTypes = await PlantType.find();
        res.status(200).json(plantTypes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.post('/add-plant-type', async (req, res) => {
    const { name } = req.body;
    try {
        const plantType = new PlantType({
            name
        });
        await plantType.save();
        res.status(200).send('Plant Type added');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})



module.exports = router;