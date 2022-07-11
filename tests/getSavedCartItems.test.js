const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  it('Testa se, ao executar \'getSavedCartItems\', o método \'localStorage.getItem\' é chamado:', () => {
    const testeFunc = getSavedCartItems();

    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('Testa se, ao executar \'getSavedCartItems\', o método \'localStorage.getItem\' é chamado com o parâmetro \'cartItems\':', () => {
    const testeFunc = getSavedCartItems();

    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
