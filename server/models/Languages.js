const mongoose = require('mongoose');

const LanguageSchema = mongoose.Schema({
    name: String,
});

module.exports = mongoose.model('languages', LanguageSchema);
