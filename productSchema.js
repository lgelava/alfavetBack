const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  images: Array,
  category: String,
});

module.exports = mongoose.model("Product", ProductSchema);
