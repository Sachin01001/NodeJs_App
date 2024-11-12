// Load environment variables from .env file
<<<<<<< HEAD
requinpmre('dotenv').config();
=======
require('dotenv').config();
>>>>>>> 81bc8fd (Initial commit)

const express = require('express');
const app = express();

// Use environment variables
const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || "Hello World!";

// Basic route
app.get('/', (req, res) => {
    res.send(MESSAGE);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
<<<<<<< HEAD
});
=======
});
>>>>>>> 81bc8fd (Initial commit)
