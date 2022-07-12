const saveCartItems = (carrinho) => {
  // seu código aqui
  console.log('oi');
  localStorage.setItem('cartItems', carrinho.outerHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
