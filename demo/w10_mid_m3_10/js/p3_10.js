import { mid_products_10 } from './products_data_10.js';

/* 
0110
9876
*/

const productsCenter = document.querySelector('.products-container');

console.log('mid_products_10', mid_products_10);

const displayproductsItems = (productsItems) => {
  let displayproducts = productsItems
    .map((item) => {
      const { no, id, title, price, category, img } = item;
      return `      
      <div class="single-product">
        <img
          src="${img}"
          class="single-product-img img"
          alt="${title}"
        />
        <footer>
          <h5 class="name">${title}</h5>
          <span class="price">$${price}</span>
        </footer>
      </div>`;
    })
    .join('');
  productsCenter.innerHTML = displayproducts;
};

window.addEventListener('DOMContentLoaded', () => {
  displayproductsItems(mid_products_10);
});
