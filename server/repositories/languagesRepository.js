const LanguageSchema = require('../models/Languages');


exports.language_get_all = async function () {
    const languages = await LanguageSchema.find();
    return languages;
};



