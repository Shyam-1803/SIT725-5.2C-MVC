/**
 * MODEL LAYER
 * 
 * The Model contains all business logic and data manipulation.
 * It is responsible for:
 * - Performing calculations
 * - Validating data
 * - Handling business rules
 * 
 * The Model does NOT:
 * - Handle HTTP requests/responses
 * - Contain user interface code
 * - Know about controllers or views
 */

class CalculatorModel {
    /**
     * Perform calculation based on operation
     * @param {string|number} num1 - First number
     * @param {string|number} num2 - Second number
     * @param {string} operation - Operation to perform (add, subtract, multiply, divide)
     * @returns {object} Result object with success status and result or error
     */
    static performCalculation(num1, num2, operation) {
        // Validate inputs
        const validation = this.validateInputs(num1, num2, operation);
        if (!validation.valid) {
            return {
                success: false,
                error: validation.error
            };
        }

        // Convert to numbers
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        let result;

        // Perform calculation based on operation
        switch (operation.toLowerCase()) {
            case 'add':
                result = this.add(n1, n2);
                break;
            case 'subtract':
                result = this.subtract(n1, n2);
                break;
            case 'multiply':
                result = this.multiply(n1, n2);
                break;
            case 'divide':
                // Check for division by zero
                if (n2 === 0) {
                    return {
                        success: false,
                        error: 'Cannot divide by zero'
                    };
                }
                result = this.divide(n1, n2);
                break;
            default:
                return {
                    success: false,
                    error: 'Invalid operation. Use: add, subtract, multiply, divide'
                };
        }

        return {
            success: true,
            num1: n1,
            num2: n2,
            operation: operation,
            result: result
        };
    }

    /**
     * Validate calculation inputs
     * @param {*} num1 - First number
     * @param {*} num2 - Second number
     * @param {*} operation - Operation
     * @returns {object} Validation result
     */
    static validateInputs(num1, num2, operation) {
        // Check if all parameters are provided
        if (num1 === undefined || num1 === null || 
            num2 === undefined || num2 === null || 
            !operation) {
            return {
                valid: false,
                error: 'Missing required fields: num1, num2, operation'
            };
        }

        // Check if numbers are valid
        if (isNaN(num1) || isNaN(num2)) {
            return {
                valid: false,
                error: 'num1 and num2 must be valid numbers'
            };
        }

        return { valid: true };
    }

    /**
     * Add two numbers
     * @param {number} a - First number
     * @param {number} b - Second number
     * @returns {number} Sum
     */
    static add(a, b) {
        return a + b;
    }

    /**
     * Subtract second number from first
     * @param {number} a - First number
     * @param {number} b - Second number
     * @returns {number} Difference
     */
    static subtract(a, b) {
        return a - b;
    }

    /**
     * Multiply two numbers
     * @param {number} a - First number
     * @param {number} b - Second number
     * @returns {number} Product
     */
    static multiply(a, b) {
        return a * b;
    }

    /**
     * Divide first number by second
     * @param {number} a - First number (dividend)
     * @param {number} b - Second number (divisor)
     * @returns {number} Quotient
     */
    static divide(a, b) {
        return a / b;
    }

    /**
     * Get calculation history (could be extended to use database)
     * @returns {array} Array of calculation records
     */
    static getHistory() {
        // This is a simple example - in real app would use database
        return [
            { num1: 10, num2: 5, operation: 'add', result: 15, timestamp: new Date() },
            { num1: 20, num2: 4, operation: 'multiply', result: 80, timestamp: new Date() }
        ];
    }
}

module.exports = CalculatorModel;