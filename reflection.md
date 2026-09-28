Basic Login System Reflection

Author: Dr. Chantell McDowell
Per Scholas Student

In this lab, I learned how to build a simple registration and login system with Express and MongoDB. I learned that a password should never be saved as plain text. I used bcrypt to hash the password before the user was saved to the database.

I also learned how a login route checks a user's email first and then compares the password the user enters with the hashed password stored in MongoDB. I used an isCorrectPassword method in my User model to keep this part of the code organized.

Another new concept for me was using JSON Web Tokens. When the user's login information is correct, my API creates a signed JWT that includes the user's id and username. I understand that the token can be used later to protect private routes.

One challenge was understanding the difference between the original password and the hashed password. The original password is only used when the user registers or logs in. The hashed password is what gets stored in the database. bcrypt can compare them without changing the stored hash back into the original password.

I also learned why the .env file is important. My MongoDB connection string and JWT secret should stay private, so I added .env to .gitignore. I used .env.example to show what variables the project needs without sharing private information.

This lab helped me understand the basic flow of user authentication: register the user, hash the password, save the user, check the login information, and return a token when the information is correct.
