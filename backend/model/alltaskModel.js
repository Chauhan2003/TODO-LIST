const mongoose = require('mongoose');

const taskScema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['incomplete', 'complete'],
        default: 'incomplete',
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    }
});

module.exports = mongoose.model('alltask', taskScema);