// models/learner.js
const mongoose = require('mongoose');
const getDbConnection = require('../../config/database');

const learnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const dbConnection = getDbConnection('LibAcademy');
const Learners = dbConnection.model('Learners', learnerSchema, 'registered_Learners');

module.exports = Learners