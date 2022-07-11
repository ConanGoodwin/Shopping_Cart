require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Testa se fetchProducts é uma função.',() => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Teste se o \'fetch\' é executado ao menos uma vez, ao executar fetchProducts com o parametro \'computador\':', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Testa se o \'fetch\' utiliza a url o endpoint \'https://api.mercadolibre.com/sites/MLB/search?q=computador\':', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');

    expect(fetch).toHaveBeenCalledWith(url);
  });

  it ('Testa se o retorno da função \'fetchProducts\' com o argumento \'computador\' é uma estrutura de dados igual ao objeto \'computadorSearch\'', async () => {
    const retorno = await fetchProducts('computador');

    expect(retorno).toEqual(computadorSearch);
  });

  it('Teste se, ao chamar a função \'fetchProducts\' sem argumento, retorna um erro com a mensagem: \'You must provide an url\':', async () => {
    const retorno = await fetchProducts();

    expect(retorno).toEqual(new Error('You must provide an url'));
  });
});
