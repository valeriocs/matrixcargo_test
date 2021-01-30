const service = require('../services/github-repositories-service');

exports.github_repo_search = async function(req) {
    const apiSearch = await service.github_search_repos(req);

    return apiSearch;
};
