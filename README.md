Basic Login System

This project is a simple login system built with Node.js, Express, MongoDB, Mongoose, bcrypt, JWT, and dotenv.

The app lets a user register with a username, email, and password. The password is hashed before it is saved to MongoDB.

A registered user can log in with their email and password. If the login is correct, the app returns a JWT token.

Main Routes

POST /api/users/register

POST /api/users/login

To Run the Project

1. Run npm install
2. Create a .env file
3. Add MONGO_URI, JWT_SECRET, and PORT
4. Run npm start

The .env file and node_modules folder are not pushed to GitHub.

Author: Dr. Chantell McDowell, Per Scholas Student
