// const saveCartItems = require("./helpers/saveCartItems");
// const getSavedCartItems = require("./helpers/getSavedCartItems");

// const getSavedCartItems = require("./helpers/getSavedCartItems");

// const { fetchProducts } = require("./helpers/fetchProducts");
const classeCarrinho = '.cart__items';
const carrinho = document.querySelector(classeCarrinho);
const btnLimparCarrinho = document.querySelector('.empty-cart');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');

  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
  const pai = event.target.parentElement;

  pai.removeChild(event.target);
  saveCartItems(carrinho);
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');

  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);

  return li;
};

async function addItemCar(event) {
  const alvo = event.target;
  const idProduto = alvo.parentElement.firstChild.innerText;
  const itemAdd = await fetchItem(idProduto);

  carrinho.appendChild(createCartItemElement(itemAdd));
  // carrinho.lastChild.addEventListener('click', cartItemClickListener);
  saveCartItems(carrinho);
}

async function montaListaProdutos() {
  const dados = await fetchProducts('computador');
  const telaProdutos = document.querySelector('.items');

  dados.results.forEach((item) => {
    const produto = createProductItemElement(item);

    telaProdutos.appendChild(produto);
  });
}

function montaEventoBtnAddCarrinho() {
  const btnAddCarrinho = document.querySelectorAll('.item__add');

  btnAddCarrinho.forEach((btn) => btn.addEventListener('click', addItemCar));
}

async function montaCarrinho() {
  const newList = getSavedCartItems();
  carrinho.innerHTML = newList;
  const lisCarrinho = document.getElementsByClassName('cart__item');

  for (let index = 0; index < lisCarrinho.length; index += 1) {
    lisCarrinho[index].addEventListener('click', cartItemClickListener);
  }
}

window.onload = async () => {
  await montaListaProdutos();
  await montaCarrinho();
  await montaEventoBtnAddCarrinho();
  btnLimparCarrinho.addEventListener('click', () => {
    carrinho.innerHTML = '';
    saveCartItems(carrinho);
  });
  // localStorage.setItem('cartItems', '');
};
