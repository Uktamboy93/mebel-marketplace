// routes/advertisement.js
const express = require('express');
const router = express.Router();
const Advertisement = require('../models/Advertisement');
const Product = require('../models/Product');
const authenticate = require('../middleware/auth');

router.post('/', authenticate, async (req, res) => {
    if (req.user.role !== 'seller') return res.status(403).send({ error: "Ruxsat yo'q" });
    const { productId } = req.body;
    const ad = new Advertisement({ productId, sellerId: req.user._id });
    try {
        await ad.save();
        res.status(201).send({ message: "Reklama so'rovi yuborildi" });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.put('/:id/approve', authenticate, async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).send({ error: "Ruxsat yo'q" });
    try {
        const ad = await Advertisement.findByIdAndUpdate(req.params.id, { approved: true }, { new: true });
        await Product.findByIdAndUpdate(ad.productId, { isAdvertised: true });
        res.send({ message: "Reklama tasdiqlandi" });
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;