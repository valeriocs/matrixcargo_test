const { Octokit } = require("@octokit/rest");
const GitHubResponseModel = require('../models/GitHubResponseModel');
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});


exports.github_search_by_language =  async function({ query }) {
    const searchResult = await octokit.search.repos(query)

    return new GitHubResponseModel(searchResult.data);
};
