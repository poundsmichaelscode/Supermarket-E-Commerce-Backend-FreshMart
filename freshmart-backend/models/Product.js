const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  imageUrl: String,
  stock: Number
});

module.exports = mongoose.model('Product', ProductSchema);
