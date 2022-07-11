require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('Testa se fetchProducts é uma função.',() => {
    expect(typeof fetchItem).toBe('function');
  });

  it('Testa se ao chamar a função \'fetchItem\' com o argumento do item "MLB1615760527" o fetch foi chamado ao menos uma vez:', async () => {
    await fetchItem('MLB1615760527');

    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Testa se o \'fetch\' utiliza a url o endpoint \'https://api.mercadolibre.com/items/MLB1615760527\':', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');

    expect(fetch).toHaveBeenCalledWith(url);
  });

  it ('Testa se o retorno da função \'fetchItem\' com o argumento \'MLB1615760527\' é uma estrutura de dados igual ao objeto \'item\'', async () => {
    const retorno = await fetchItem('MLB1615760527');

    expect(retorno).toEqual(item);
  });

  it('Teste se, ao chamar a função \'fetchItem\' sem argumento, retorna um erro com a mensagem: \'You must provide an url\':', async () => {
    const retorno = await fetchItem();

    expect(retorno).toEqual(new Error('You must provide an url'));
  });
});
