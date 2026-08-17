# PRD Checklist

## Project Structure

```text
BE2_Assignment/
│
├── db/
│   └── db.connect.js
│
├── models/
│   └── car.models.js
│
├── index.js
├── package.json
└── package-lock.json
```

## Project Overview

This project is a backend application designed to manage car records in a database. It allows users to store and manage detailed information about cars, including their brand, model, specifications, pricing, condition, and other details. The project provides basic functionality to create, view, update, and delete car records efficiently.

## Features Implemented

- Created functionality to add a new car to the database.
- Added functionality to create multiple car records using the same create function.
- Implemented functionality to retrieve and display all cars from the database.
- Implemented functionality to find cars by their brand.
- Implemented functionality to find cars by their color.
- Implemented functionality to update the price of a car based on its model.
- Implemented functionality to update the condition of a car based on its model.
- Implemented functionality to delete a car using its unique ID.
- Implemented functionality to delete a car based on its body style.
- Added error handling for database operations using try-catch.
- Used Mongoose methods to perform CRUD operations on the car collection.
- Used reusable functions with parameters for different car operations.
- Displayed created, retrieved, updated, and deleted car data in the console.

## Tech Stack Used

- Node.js
- MongoDB Atlas
- Mongoose
- dotenv
- Git
- GitHub

## What I Learned

- How to create and save car records using Mongoose.
- How to retrieve all documents from a MongoDB collection.
- How to filter documents using specific fields such as brand and color.
- How to update existing documents using Mongoose.
- How to delete documents using an ID or a specific field.
- How to create reusable functions for database operations.
- How to handle asynchronous database operations using async/await.
- How to handle errors using try-catch blocks.
- How to perform CRUD operations with MongoDB and Mongoose.
- How to organize backend code using separate database, model, and main application files.

## Author

**Rohit Bhise**
