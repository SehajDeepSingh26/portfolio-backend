const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Location = require('./models/location');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI).then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.post('/location', async (req, res) => {
    // console.log('Received location:', req.body);
    try {
        const newLocation = new Location(req.body);
        await newLocation.save();
        res.status(200).json({ message: 'Location saved' });
    } catch (err) {
        console.error('Save error:', err);
        res.status(500).json({ error: 'Save failed' });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
