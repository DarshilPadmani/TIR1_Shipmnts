const mongoose = require('mongoose');
const Ingredient = require('./Ingredient');

const storePricingSchema = new mongoose.Schema({
    storeLocation: {
        type: String,
        require: true,
    }, 
    currency: {
        type: Number,
        require: true,
        default: "INR"
    },
    taxPercentage: {
        type: Number,
        require: true
    },
    premium_items: [String],
});

module.exports = mongoose.model('storePricing', storePricingSchema)