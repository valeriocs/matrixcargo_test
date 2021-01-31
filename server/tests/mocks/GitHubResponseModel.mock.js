const repoModel = require('./GitHubRepoModel.mock');

const input = {
    total_count: 123321,
    incomplete_results: false,
    items: [repoModel.input],
};

const output = {
    totalCount: 123321,
    repositories: [repoModel.output],
};

module.exports = {
    output,
    input,
};