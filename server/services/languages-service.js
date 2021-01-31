const repository = require('../repositories/languages-repository');

exports.language_get_all = async function () {
    try {
        const dbSearch = await repository.language_get_all();
        return dbSearch;
    } catch (error) {
        throw new Error('Connection to DB has failed');
    }
};
