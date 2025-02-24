const { name } = require("ejs");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cateringSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    
    items: [
        {
            name: String,
            price: Number
        }
    ],

    image: {
        type: String,
        required: true
    }
})

const Catering = new mongoose.model("Catering", cateringSchema);

module.exports = Catering;