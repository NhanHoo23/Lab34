const express = require('express');
const router = express.Router();

const Product = require('../models/Products');

router.get('/get-products', async (req, res) => {
    try {
        const products = await Product.find()
            .populate('category')
            .populate('plantType')
        res.status(200).json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

// productName: {
//     type: String,
//     required: true
// },
// price: {
//     type: Number,
//     required: true
// },
// quantity: {
//     type: Number,
//     required: true
// },
// origin: {
//     type: String,
//     required: true
// },
// images: [
//     {
//         type: String
//     }
// ],
// category: {
//     type: Schema.Types.ObjectId,
//     ref: 'Category'
// },
// plantType: {
//     type: Schema.Types.ObjectId,
//     ref: 'PlantType'
// },
// handBook: {
//     "kienThucCoBan": [
//         {
//             "title": {
//                 type: String
//             },
//             "content": {
//                 type: String
//             }
//         }
//     ],
//     "cacGiaiDoan": [
//         {
//             "title": {
//                 type: String
//             },
//             "content": {
//                 type: String
//             }
//         }
//     ]
// }
router.post('/add-product', async (req, res) => {
    const { productName, price, quantity, origin, images, category, plantType, handBook } = req.body;
    try {
        const product = new Product({
            productName,
            price,
            quantity,
            origin,
            images,
            category,
            plantType,
            handBook
        });
        await product.save();
        res.status(200).send('Product added');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;