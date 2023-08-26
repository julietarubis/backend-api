const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.post('/calculate', (req, res) => {
    const data = req.body.data;
    const numbers = data.split(',').map(Number);

    const sum = numbers.reduce((a, b) => a + b, 0);
    const average = sum / numbers.length;
    const variance = numbers.map(num => Math.pow(num - average, 2)).reduce((a, b) => a + b, 0) / numbers.length;
    const standardDeviation = Math.sqrt(variance);

    res.json({
        sum,
        average,
        standardDeviation
    });
});
