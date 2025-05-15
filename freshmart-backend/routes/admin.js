const express = require('express');
const { auth, authorize } = require('../middleware/auth');
const Category = require('../models/Category');
const Product = require('../models/Product');

const router = express.Router();

// Create Category
router.post('/categories', auth, authorize('admin'), async (req, res) => {
  try {
    const category = await Category.create({ name: req.body.name });
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Create Product
router.post('/products', auth, authorize('admin'), async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
