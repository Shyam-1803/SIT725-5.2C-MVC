/**
 * CONTROLLER LAYER
 * 
 * The Controller handles HTTP requests and responses.
 * It is responsible for:
 * - Receiving requests from routes
 * - Extracting data from requests
 * - Calling appropriate Model methods
 * - Sending responses back to client
 * 
 * The Controller does NOT:
 * - Contain business logic (that's in Model)
 * - Directly render HTML (that's in View)
 * - Perform calculations (that's in Model)
 */

const CalculatorModel = require('../models/calculatorModel');

class CalculatorController {
    /**
     * Handle calculation request
     * @param {object} req - Express request object
     * @param {object} res - Express response object
     */
    static calculate(req, res) {
        try {
            // Extract data from request body
            const { num1, num2, operation } = req.body;

            console.log(`Calculation request: ${num1} ${operation} ${num2}`);

            // Call Model to perform calculation
            const result = CalculatorModel.performCalculation(num1, num2, operation);

            // Send appropriate response based on result
            if (result.success) {
                res.status(200).json(result);
            } else {
                res.status(400).json(result);
            }
        } catch (error) {
            console.error('Error in calculate controller:', error);
            res.status(500).json({
                success: false,
                error: 'Internal server error',
                message: error.message
            });
        }
    }

    /**
     * Get calculation history
     * @param {object} req - Express request object
     * @param {object} res - Express response object
     */
    static getHistory(req, res) {
        try {
            // Call Model to get history
            const history = CalculatorModel.getHistory();

            res.status(200).json({
                success: true,
                count: history.length,
                history: history
            });
        } catch (error) {
            console.error('Error in getHistory controller:', error);
            res.status(500).json({
                success: false,
                error: 'Internal server error',
                message: error.message
            });
        }
    }

    /**
     * Health check endpoint
     * @param {object} req - Express request object
     * @param {object} res - Express response object
     */
    static healthCheck(req, res) {
        res.status(200).json({
            success: true,
            message: 'Calculator API is running',
            timestamp: new Date().toISOString(),
            endpoints: {
                calculate: 'POST /api/calculator/calculate',
                history: 'GET /api/calculator/history',
                health: 'GET /api/calculator/health'
            }
        });
    }
}

module.exports = CalculatorController;