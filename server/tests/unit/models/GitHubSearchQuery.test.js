const GitHubSearchQuery = require('../../../models/utils/github-repo-search-query');
const { input, output } = require('../../mocks/GitHubSearchQuery.mock');

test('Valida se a conversão para o modelo correto de query será feito', () => {
    const expected = new GitHubSearchQuery(input);

    expect(expected).toMatchObject(output);
});

