const mongoose = require('mongoose');
const dotenv = require('dotenv');

const dbConnect = () => {
    mongoose.connect(process.env.MONGO_STRING);

    const db = mongoose.connection;

    db.on('error', (error) => {
        console.error('MongoDB connection error:', error);
    });

    db.once('open', () => {
        console.log('Connected to MongoDB');
    });

    db.on('disconnected', () => {
        console.log('MongoDB disconnected');
    });
};

module.exports = dbConnect;