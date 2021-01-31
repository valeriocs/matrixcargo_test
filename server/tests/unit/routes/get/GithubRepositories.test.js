const controller = require('../../../../controller/github-repositories-controller');
const service = require('../../../../services/github-repositories-service');
const repository = require('../../../../repositories/github-repositories');
const query = require('../../../mocks/GitHubSearchQuery.mock');
const response = require('../../../mocks/GitHubResponseModel.mock');


test('percorre o fluxo do comando .GET no endpoint /github-repositories', () => {
    repository.github_search_by_language = jest.fn(() => response.output);
    service.github_search_repos = jest.fn(() => repository.github_search_by_language(query.output));
    controller.github_repo_search = jest.fn(() => service.github_search_repos(query.input));
    const apiResponse = controller.github_repo_search();

    expect(apiResponse).toMatchObject(response.output);
    expect(service.github_search_repos).toHaveBeenCalledTimes(1);
    expect(repository.github_search_by_language).toHaveBeenCalledTimes(1);
});


