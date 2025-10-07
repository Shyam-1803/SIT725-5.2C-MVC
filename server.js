const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Import routes
const calculatorRoutes = require('./routes/calculatorRoutes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('views'));

// Root route - serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Use calculator routes
app.use('/api/calculator', calculatorRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ 
        error: 'Route not found',
        message: 'The requested endpoint does not exist' 
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Internal server error',
        message: err.message 
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('MVC Architecture is active!');
    console.log('- Model: models/calculatorModel.js');
    console.log('- View: views/index.html');
    console.log('- Controller: controllers/calculatorController.js');
    console.log('- Routes: routes/calculatorRoutes.js');
});

module.exports = app;