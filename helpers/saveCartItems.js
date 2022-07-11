const saveCartItems = (carrinho) => {
  // seu código aqui
  localStorage.setItem('cartItems', carrinho);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
