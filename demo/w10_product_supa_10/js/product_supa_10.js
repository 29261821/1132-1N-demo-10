import { _supabase } from './clientSupabase_10.js'

const productsCenter = document.querySelector('.products-container')

let products_10 = []

console.log('products_10', products_10)

const fetchProducts = async () => {
  try {
    let { data, error } = await _supabase.from('product_10').select('*')
    console.log('data', data)
    return data
  } catch (err) {
    console.log(err)
  }
}

const displayproductsItems = (productsItems) => {
  let displayproducts = productsItems
    .map((item) => {
      const { no, id, title, price, category, img } = item
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
      </div>`
    })
    .join('')
  productsCenter.innerHTML = displayproducts
}

window.addEventListener('DOMContentLoaded', async () => {
  products_10 = await fetchProducts()
  //consolog.log('products_10', products_10)
  displayproductsItems(products_10)
})
