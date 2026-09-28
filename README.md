Basic Login System

This project is a simple login system built with Node.js, Express, MongoDB, Mongoose, bcrypt, JWT, and dotenv.

The app lets a user register with a username, email, and password. The password is hashed before it is saved to MongoDB.

A registered user can log in with their email and password. If the login is correct, the app returns a JWT token.

Main Routes

POST /api/users/register

POST /api/users/login

Challenges I Had

This lab was difficult for me because there were several new parts working together at the same time.

One challenge was understanding how bcrypt hashes a password before it is saved to MongoDB. I also had to understand how bcrypt compares the password entered during login with the hashed password in the database.

Another challenge was learning how JWT works. I had to understand how a token is created after a successful login and why the JWT secret needs to stay private.

Connecting the Express server to MongoDB and setting up the .env file was also challenging. I had to make sure the MongoDB connection string, JWT secret, and port were set up correctly without pushing private information to GitHub.

Working through these challenges helped me better understand how registration, login, password security, MongoDB, and authentication work together.

To Run the Project

1. Run npm install
2. Create a .env file
3. Add MONGO_URI, JWT_SECRET, and PORT
4. Run npm start

The .env file and node_modules folder are not pushed to GitHub.

Author: Dr. Chantell McDowell, Per Scholas Student
