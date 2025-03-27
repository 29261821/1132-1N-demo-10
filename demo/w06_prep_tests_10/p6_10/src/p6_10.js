import menu_10 from './data_10.js'

console.log('menu_10', menu_10)

const section = document.querySelector('.section-center')

const dispalyMenu_10 = () => {
  const menuInfo = menu_10
    .map((item) => {
      const { id, title, category, price, img, desc } = item
      return `<article class="menu-item">
              <img src=${img} alt="${title}" class="photo" />
              <div class="item-info">
                <header>
                  <h4>${title}</h4>
                  <h4 class="price">${price}</h4>
                </header>
                <p class="item-text">
                  ${desc}
                </p>
              </div>
            </article>`
    })
    .join('')

  console.log('menuInfo', menuInfo)
  section.innerHTML = menuInfo
}

window.addEventListener('DOMContentLoaded', () => {
  dispalyMenu_10()
})
