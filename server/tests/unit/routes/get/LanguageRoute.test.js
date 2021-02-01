const controller = require('../../../../controller/languagesController');
const service = require('../../../../services/languagesService');
const repository = require('../../../../repositories/languagesRepository');
const { output } = require('../../../mocks/Languages.mock');


test('Obtem todas linguagens presentes no MongoDB .GET no endpoint /languages', () => {
    repository.language_get_all = jest.fn(() => output);
    service.language_get_all = jest.fn(() => repository.language_get_all());
    controller.language_get_all = jest.fn(() => service.language_get_all());
    const apiResponse = controller.language_get_all();

    expect(apiResponse).toMatchObject(output);
    expect(service.language_get_all).toHaveBeenCalledTimes(1);
    expect(repository.language_get_all).toHaveBeenCalledTimes(1);
});


