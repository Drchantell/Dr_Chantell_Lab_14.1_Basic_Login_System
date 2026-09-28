Basic Login System

Author: Dr. Chantell McDowell
Per Scholas Student

Project Overview

In this lab, I created a basic login system for Innovate Inc. using Node.js, Express, MongoDB, Mongoose, bcrypt, JSON Web Tokens, and dotenv.

The project allows a user to register with a username, email, and password. The password is hashed before it is saved to MongoDB. A returning user can log in with an email and password. If the login information is correct, the API returns a signed JWT token.

What I Used

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- bcrypt
- jsonwebtoken
- dotenv

Project Structure

Dr_Chantell_Lab_14.1_Basic_Login_System/
  config/
    connection.js
  models/
    User.js
  routes/
    userRoutes.js
  .env.example
  .gitignore
  package.json
  README.md
  reflection.md
  server.js

How to Set Up the Project

1. Open this folder in VS Code.
2. Open the terminal.
3. Install the packages:

npm install

4. Create a file named .env.
5. Copy the information from .env.example into .env.
6. Replace the example MongoDB information with your real MongoDB Atlas connection string.
7. Add your own JWT secret.
8. Keep PORT=3000.
9. Start the server:

npm start

If everything is connected correctly, the terminal should show:

MongoDB connected successfully!
Server is running on port 3000

Register a User

POST http://localhost:3000/api/users/register

Example JSON body:

{
  "username": "DrChantell",
  "email": "chantell@example.com",
  "password": "password123"
}

Expected result:
- Status 201
- A new user is saved in MongoDB.
- The password is hashed.
- The password is not returned in the response.

Login a User

POST http://localhost:3000/api/users/login

Example JSON body:

{
  "email": "chantell@example.com",
  "password": "password123"
}

Expected result:
- The API checks the email.
- bcrypt checks the password against the hashed password.
- A signed JWT token is returned when the login is correct.

Incorrect Login

Expected response:

{
  "message": "Incorrect email or password."
}

Security

The .env file contains private information. It is listed in .gitignore and should not be pushed to GitHub. I should never post my MongoDB password or JWT secret in my README or repository.

How This Meets the Lab Requirements

- Express project with the required packages
- User model with password hashing
- MongoDB connection using MONGO_URI
- POST /api/users/register
- Duplicate email checking
- Password excluded from registration response
- POST /api/users/login
- bcrypt password comparison
- JWT containing user id and username
- Generic rejection for incorrect email or password
- .env and node_modules excluded through .gitignore
