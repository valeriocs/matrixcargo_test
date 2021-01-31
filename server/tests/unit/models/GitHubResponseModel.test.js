const GitHubResponseModel = require('../../../models/GitHubResponseModel');
const { input, output } = require('../../mocks/GitHubResponseModel.mock');

test('Valida se a conversão para o modelo correto de query será feito', () => {
    const expected = new GitHubResponseModel(input);

    expect(expected).toMatchObject(output);
});

