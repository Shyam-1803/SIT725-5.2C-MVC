/**
 * ROUTES LAYER
 * 
 * Routes define the URL structure and map URLs to Controller functions.
 * This layer is responsible for:
 * - Defining API endpoints
 * - Mapping HTTP methods (GET, POST, etc.) to Controllers
 * - Organizing application routing structure
 * 
 * Routes do NOT:
 * - Contain business logic
 * - Handle data processing
 * - Directly manipulate data
 */

const express = require('express');
const router = express.Router();
const CalculatorController = require('../controllers/calculatorController');

/**
 * POST /api/calculator/calculate
 * Perform a calculation
 * Body: { num1, num2, operation }
 */
router.post('/calculate', CalculatorController.calculate);

/**
 * GET /api/calculator/history
 * Get calculation history
 */
router.get('/history', CalculatorController.getHistory);

/**
 * GET /api/calculator/health
 * Health check endpoint
 */
router.get('/health', CalculatorController.healthCheck);

module.exports = router;