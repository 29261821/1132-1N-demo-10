import { tours_10 } from './data_10.js'
console.log('tours_10', tours_10)

const section = document.querySelector('.section-center')

const displayTours_10 = () => {
  const toursInfo = tours_10
    .map((tour) => {
      return `
                  <article class="single-tour">
            <img src=${tour.img} alt=${tour.name} />
            <footer>
              <div class="tour-info">
                <h4>${tour.name} </h4>
                <h4 class="tour-price">$${tour.price}</h4>
              </div>
              <p>${tour.info}<button>read more</button>
              </p>
              <button class="delete-btn">not interested</button>
            </footer>
          </article>
  `
    })
    .join('')

  console.log('toursInfo', toursInfo)
  section.innerHTML = toursInfo
}

window.addEventListener('DOMContentLoaded', () => {
  displayTours_10()
})
