const repository = require('../repositories/github-repositories');
const GitHubSearchQuery = require('../models/utils/github-repo-search-query');

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
