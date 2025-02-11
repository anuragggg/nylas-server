const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// GET request for webhook verification
app.get('/webhook', (req, res) => {
    const challenge = req.query.challenge;
    if (!challenge) {
        return res.status(400).send('Missing challenge parameter');
    }
    console.log(`Nylas Challenge Received: ${challenge}`);
    res.send(challenge);
});

// POST request for webhook events
app.post('/webhook', (req, res) => {
    console.log('Nylas Webhook Event Received:', JSON.stringify(req.body, null, 2));
    res.status(200).json({ message: 'Webhook received successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});