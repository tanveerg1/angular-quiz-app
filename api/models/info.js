const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    question1: {
        type: String,
        default: 'Not Selected'
    },
    question2: {
        type: String,
        default: 'Not Selected'
    },
    question3: {
        type: String,
        default: 'Not Selected'
    },
    question4: {
        type: String,
        default: 'Not Selected'
    },
    question5: {
        type: String,
        default: 'Not Selected'
    },
    question6: {
        type: String,
        default: 'Not Selected'
    },
    question7: {
        type: String,
        default: 'Not Selected'
    },
    question8: {
        type: String,
        default: 'Not Selected'
    },
    question9: {
        type: String,
        default: 'Not Selected'
    },
    question10: {
        type: String,
        default: 'Not Selected'
    },
});

module.exports = mongoose.model('Info', infoSchema);