const repository = require('../repositories/gitHubRepository');
const GitHubSearchQuery = require('../models/utils/GitHubSearchQuery');

exports.github_search_repos = async function (req) {
    const customReq = {
        ...req,
        query: new GitHubSearchQuery(req.query),
    };

    try {
        const apiSearch = await repository.github_search_by_language(customReq);
        return apiSearch;
    } catch (error) {
        throw new Error('Github API failed to connect');
    }
};
