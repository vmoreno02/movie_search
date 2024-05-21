const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', async (req, res) => {
    res.send('Hello, World!');
});

// start the app
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});