const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    images: [
        {
            type: String
        }
    ],
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    plantType: {
        type: Schema.Types.ObjectId,
        ref: 'PlantType'
    },
    handBook: {
        kienThucCoBan: [
            {
                title: {
                    type: String
                },
                content: {
                    type: String
                }
            }
        ],
        cacGiaiDoan: [
            {
                title: {
                    type: String
                },
                content: {
                    type: String
                }
            }
        ]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);