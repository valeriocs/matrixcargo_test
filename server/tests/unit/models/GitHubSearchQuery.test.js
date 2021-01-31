const GitHubSearchQuery = require('../../../models/utils/GitHubSearchQuery');
const { input, output } = require('../../mocks/GitHubSearchQuery.mock');

test('Valida se a conversão para o modelo correto de query será feito', () => {
    const expected = new GitHubSearchQuery(input);

    expect(expected).toMatchObject(output);
});

