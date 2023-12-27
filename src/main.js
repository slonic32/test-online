import refsAPI from './js/refs.js';
import { drawDiscount, discountOnClick } from './js/discount.js';
import { drawPopular, popularOnClick } from './js/popular.js';

// Test RenderProuctList

//draw discount products
drawDiscount();
drawPopular();

//get DOM tree
const frontEnd = new refsAPI();

//add event listener for discount products
frontEnd.discountList.addEventListener('click', discountOnClick);
frontEnd.popularList.addEventListener('click', popularOnClick);
