import fetchAPI from './fetchApi.js';
import localStorageApi from './localStorageApi.js';
import refsAPI from './refs.js';

import { buyProduct, setCheckedIcon } from './discount.js';

// icons
import cartIcon from '../img/icons.svg#discount-cart';
import checkedIcon from '../img/icons.svg#discount-checked';

// function to draw popular products section
async function drawPopular() {
  // number of products to draw
  const POPULARNUMBER = 5;
  // get all nodes
  const frontEnd = new refsAPI();
  //clear
  frontEnd.popularList.innerHTML = '';
  //get list of popular products
  const popularProducts = await fetchAPI.popular();

  //array of products to draw
  const productsToDraw = [];
  let i = 0;
  //do we have enough products to draw?
  if (popularProducts.length < POPULARNUMBER) {
    i = popularProducts.length;
  } else {
    i = POPULARNUMBER;
  }
  //choose random products and add to array to be drawn
  for (; i > 0; i--) {
    let randomNumber = Math.floor(Math.random() * popularProducts.length);
    productsToDraw.push(popularProducts[randomNumber]);
    popularProducts.splice(randomNumber, 1); //remove used products
  }

  //read saved Cart
  let cart = localStorageApi.loadCart();
  //get saved products id
  const productsInCart = [];
  if ('products' in cart) {
    cart = cart.products;
    cart.forEach(product => productsInCart.push(product.productId));
  }
  //draw popular products
  const productsList = [];
  productsToDraw.forEach(product => {
    //chose icon
    let icon = cartIcon;
    if (productsInCart.includes(product._id)) {
      icon = checkedIcon;
    }

    productsList.push(`
        <li class="popular-list-item popular-show" data-productId="${product._id}">
            <div class="popular-image-box popular-show"  data-productId="${product._id}">
              <img
                class="popular-image popular-show"
                src="${product.img}"
                width="114"
                height="114"
                alt="${product.name}"
                data-productId="${product._id}"
              />
            </div>
            <div class="popular-description popular-show"  data-productId="${product._id}">
              <p class="popular-title popular-show"  data-productId="${product._id}">${product.name}</p>
              <div class="popular-description-price popular-show"  data-productId="${product._id}">
                <span class="popular-price popular-show"  data-productId="${product._id}">$${product.price}</span>
                <button type="button" class="popular-icon-box popular-buy" data-productId="${product._id}">
                  <svg width="18" height="18" class="popular-cart popular-buy" data-productId="${product._id}">
                    <use href="${icon}" class="js-object popular-buy" data-jsname="popularIcon${product._id}" data-productId="${product._id}"></use>
                  </svg>
                </button>
              </div>
            </div>
         </li>
        `);
  });
  frontEnd.popularList.insertAdjacentHTML('beforeend', productsList.join(''));
}

function popularOnClick(event) {
  if (event.target.classList.contains('popular-buy')) {
    buyProduct(event.target.dataset.productid);
    setCheckedIcon(event.target.dataset.productid, 'popularIcon');
  } else if (event.target.classList.contains('popular-show')) {
    // open modal window with product info
  }
}

export { drawPopular, popularOnClick };
