const mongoose = require("mongoose");

const FruitSchema = new mongoose.Schema({
    fruitName: String,
    fruitDescription: String,
    calories: Number,
    carbohydrates: Number,
    protein: Number,
    fat: Number,
    imageUrl: String,
    isFavorite: Boolean
})


const Fruit = mongoose.model("Fruit", FruitSchema);

module.exports = Fruit;