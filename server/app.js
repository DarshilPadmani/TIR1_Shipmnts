const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Import routes
const sampleRoutes = require('./routes/sandwichRouter');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

// Health check route
app.get('/', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// API routes
app.use('/api/samples', sampleRoutes);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

module.exports = app;
