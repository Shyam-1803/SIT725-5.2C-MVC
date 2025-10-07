# SIT725 Task 5.2C - MVC Architecture

## Student Information
- **Name**: Shyam Kumar
- **Student ID**: [Your Student ID]
- **Unit**: SIT725
- **Task**: 5.2C - Using MVC Strategy

## Project Description

This project demonstrates the implementation of MVC (Model-View-Controller) architecture in a Node.js web application. The application is a calculator that properly separates concerns into three distinct layers.

## MVC Architecture

### Model (models/calculatorModel.js)
- Contains all business logic
- Performs calculations
- Validates input data
- Handles data manipulation
- **Does NOT** handle HTTP requests or render UI

### View (views/index.html)
- Displays user interface
- Captures user input
- Shows calculation results
- **Does NOT** contain business logic

### Controller (controllers/calculatorController.js)
- Handles HTTP requests and responses
- Extracts data from requests
- Calls Model methods
- Sends responses to View
- **Does NOT** contain business logic or UI code

### Routes (routes/calculatorRoutes.js)
- Defines API endpoints
- Maps URLs to Controller functions
- Organizes application routing

## Features

- ✅ Complete MVC architecture implementation
- ✅ Four calculator operations (Add, Subtract, Multiply, Divide)
- ✅ Input validation and error handling
- ✅ Calculation history feature
- ✅ Responsive web interface
- ✅ RESTful API design

## Project Structure