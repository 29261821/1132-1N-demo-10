const productsCenter = document.querySelector('.products-container')

//const url = './api/javascript-store-products.json'
const url = 'http://localhost:3000/api/product_10'

let products_10 = []

const fetchProducts = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log('data', data)
    // displayproducts(data.meals)
    return data
  } catch (err) {
    console.log(err)
  }
}
// const fetchProducts = async () => {
//   try {
//     let { data, error } = await _supabase.from('product_10').select('*')
//     console.log('data', data)
//     return data
//   } catch (err) {
//     console.log(err)
//   }
// }

const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      const { name, price, image } = product
      return `      
      <div class="single-product">
        <img
          src="${image[0].url}"
          class="single-product-img img"
          alt="${name}"
        />
        <footer>
          <h5 class="name">${name}</h5>
          <span class="price">$${price}</span>
        </footer>
      </div>`
    })
    .join('')
  productsCenter.innerHTML = productsContent
}

document.addEventListener('DOMContentLoaded', async () => {
  products_10 = await fetchProducts(url)
  displayProducts(products_10)
  //consolog.log('products_10', products_10)
  // displayproductsItems(products_10)
})
