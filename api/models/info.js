const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    question1: {
        type: String,
        default: 'Not Selected'
    },
    question2: {
        type: String,
        default: 'Not Selected'
    }
});

module.exports = mongoose.model('Info', infoSchema);