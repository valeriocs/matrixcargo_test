const GitHubRepoModel = require('../../../models/github-repositores-model');
const { input, output } = require('../../mocks/GitHubRepoModel.mock');

test('Valida se a conversão para o modelo correto de query será feito', () => {
    const expected = new GitHubRepoModel(input);

    expect(expected).toMatchObject(output);
});

