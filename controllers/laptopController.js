const Laptop = require('../models/Laptop');

const laptopController = {
  async getAll(req, res) {
    try {
      const laptops = await Laptop.find();
      res.json(laptops);
    } catch (error) {
      console.error('Error fetching laptops:', error);
      res.status(500).send('Server Error');
    }
  },

  async getById(req, res) {
    const { id } = req.params;

    try {
      const laptop = await Laptop.findById(id);

      if (!laptop) {
        return res.status(404).json({ msg: 'Laptop not found' });
      }

      res.json(laptop);
    } catch (error) {
      console.error('Error fetching laptop by ID:', error);
      res.status(500).send('Server Error');
    }
  },

  async create(req, res) {
    const { brand, model, description, price, image } = req.body;

    try {
      const laptop = new Laptop({
        brand,
        model,
        description,
        price,
        image,
      });

      await laptop.save();

      res.status(201).json(laptop);
    } catch (error) {
      console.error('Error creating laptop:', error);
      res.status(500).send('Server Error');
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { brand, model, description, price, image } = req.body;

    try {
      const laptop = await Laptop.findById(id);

      if (!laptop) {
        return res.status(404).json({ msg: 'Laptop not found' });
      }

      laptop.brand = brand || laptop.brand;
      laptop.model = model || laptop.model;
      laptop.description = description || laptop.description;
      laptop.price = price || laptop.price;
      laptop.image = image || laptop.image;

      await laptop.save();

      res.json(laptop);
    } catch (error) {
      console.error('Error updating laptop:', error);
      res.status(500).send('Server Error');
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      const laptop = await Laptop.findById(id);

      if (!laptop) {
        return res.status(404).json({ msg: 'Laptop not found' });
      }

      await laptop.remove();

      res.json({ msg: 'Laptop removed' });
    } catch (error) {
      console.error('Error deleting laptop:', error);
      res.status(500).send('Server Error');
    }
  },
};

module.exports = laptopController;

// backend/controllers/laptopController.js
// backend/controllers/laptopController.js

const Laptop = require('../models/Laptop');

// Controller function to create a new laptop
const createLaptop = async (req, res) => {
  try {
    // Assuming data comes from the request body
    const { name, description, price, imageUrl } = req.body;

    // Create a new instance of the Laptop model
    const newLaptop = new Laptop({ name, description, price, imageUrl });

    // Save the new laptop to MongoDB
    await newLaptop.save();

    // Respond with the newly created laptop object
    res.status(201).json(newLaptop);
  } catch (error) {
    console.error('Error creating laptop:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  createLaptop,
  // Add other functions as needed
};
