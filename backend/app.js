// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const adRoutes = require('./routes/advertisement');

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB ga ulanish
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB ulandi'))
.catch(err => console.log('❌ MongoDB xato:', err));

// Marshrutlar
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/ads', adRoutes);

app.get('/', (req, res) => {
  res.send('<h1>Mebel Marketplace API ishlamoqda!</h1>');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server ${PORT}-portda ishga tushdi`);
});