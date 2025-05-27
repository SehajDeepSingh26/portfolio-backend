const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    country: String,
    state: String,
    city: String,
    latitude: Number,
    longitude: Number,
    source: String,
    date: {
        type: String,
        default: () => new Date().toLocaleDateString(),
    },
    time: {
        type: String,
        default: () => new Date().toLocaleTimeString(), 
    },
});

module.exports = mongoose.model('Location', locationSchema);
