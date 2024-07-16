const Cart = require('../models/Cart');
const Laptop = require('../models/Laptop');

const cartController = {
  async getCart(req, res) {
    const { userId } = req.user;

    try {
      let cart = await Cart.findOne({ user: userId }).populate('items.laptop');

      if (!cart) {
        cart = new Cart({ user: userId, items: [] });
        await cart.save();
      }

      res.json(cart);
    } catch (error) {
      console.error('Error fetching cart:', error);
      res.status(500).send('Server Error');
    }
  },

  async addToCart(req, res) {
    const { userId } = req.user;
    const { laptopId } = req.body;

    try {
      let cart = await Cart.findOne({ user: userId });

      const laptop = await Laptop.findById(laptopId);

      if (!laptop) {
        return res.status(404).json({ msg: 'Laptop not found' });
      }

      const existingItem = cart.items.find(item => item.laptop.equals(laptop._id));

      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.items.push({ laptop: laptop._id });
      }

      await cart.save();

      res.json(cart);
    } catch (error) {
      console.error('Error adding to cart:', error);
      res.status(500).send('Server Error');
    }
  },

  async removeFromCart(req, res) {
    const { userId } = req.user;
    const { laptopId } = req.body;

    try {
      let cart = await Cart.findOne({ user: userId });

      cart.items = cart.items.filter(item => !item.laptop.equals(laptopId));

      await cart.save();

      res.json(cart);
    } catch (error) {
      console.error('Error removing from cart:', error);
      res.status(500).send('Server Error');
    }
  },
};

module.exports = cartController;
