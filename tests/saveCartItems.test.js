const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it('Testa se, ao executar saveCartItems com o argumento \'<ol><li>Item</li></ol>\', o método \'localStorage.setItem\' é chamado:', () => {
    const testeFunc = saveCartItems('<ol><li>Item</li></ol>');

    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('Testa se, ao executar \'saveCartItems\' com o argumento \'<ol><li>Item</li></ol>\', o método \'localStorage.setItem\' é chamado com dois parâmetros, sendo o primeiro \'cartItems\' e o segundo sendo o valor passado como argumento para saveCartItems:', () => {
    const testeFunc = saveCartItems('<ol><li>Item</li></ol>');

    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>'.outerHTML);
  });
});
