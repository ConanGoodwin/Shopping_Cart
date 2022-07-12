const saveCartItems = (carrinho) => {
  // seu código aqui
  console.log('oi');
  localStorage.setItem('cartItems', carrinho.innerHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
