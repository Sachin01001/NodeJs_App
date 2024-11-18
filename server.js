
<<<<<<< HEAD
require('dotenv').config()
=======
// Load environment variables from .env file
require('dotenv').config();

>>>>>>> 02a5047edeecd6380bf6b8d44393b626b3c6acbf
const express = require('express');
const app = express();

// Use environment variables
const PORT = process.env.PORT || 3000;
<<<<<<< HEAD
const MESSAGE = process.env.MESSAGE || "Hello World!";

// Basic routegit
=======
const MESSAGE = process.env.MESSAGE || "Hello Worldd!";

// Basic route
>>>>>>> 02a5047edeecd6380bf6b8d44393b626b3c6acbf
app.get('/', (req, res) => {
    res.send(MESSAGE);
});

// Start the server
<<<<<<< HEAD
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`);});
=======
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
>>>>>>> 02a5047edeecd6380bf6b8d44393b626b3c6acbf
