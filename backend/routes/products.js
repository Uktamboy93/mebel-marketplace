// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const authenticate = require('../middleware/auth');

router.post('/', authenticate, async (req, res) => {
    if (req.user.role !== 'seller') return res.status(403).send({ error: "Ruxsat yo'q" });
    const product = new Product({ ...req.body, seller: req.user._id });
    try {
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const products = await Product.find({}).populate('seller', 'name');
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;