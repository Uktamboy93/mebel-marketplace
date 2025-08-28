// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  colors: [{ type: String }],
  squareMeters: { type: Number },
  quantity: { type: Number, required: true },
  warranty: { type: Number, default: 0 },
  images: [{ type: String }],
  category: { type: String, required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  isAdvertised: { type: Boolean, default: false },
});

module.exports = mongoose.model('Product', productSchema);