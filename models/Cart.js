const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
  laptop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Laptop',
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const CartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [CartItemSchema],
});

module.exports = mongoose.model('Cart', CartSchema);
