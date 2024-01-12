const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // Make sure you have node-fetch version 2 for CommonJS

const app = express();

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Define a route to fetch cryptocurrency data
app.get('/api/cryptocurrencies', async (req, res) => {
    try {
        const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
        const response = await fetch(url, {
            headers: {
                'X-CMC_PRO_API_KEY': '' // Replace with your actual API key
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

// Define the port
const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
