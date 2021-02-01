const service = require('../services/languagesService');

exports.language_get_all = async function () {
    const dbResponse = await service.language_get_all();

    return dbResponse;
};