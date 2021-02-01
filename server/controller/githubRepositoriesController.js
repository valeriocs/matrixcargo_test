const service = require('../services/gitHubRepositoriesService');

exports.github_repo_search = async function(req) {
    const apiSearch = await service.github_search_repos(req);

    return apiSearch;
};
