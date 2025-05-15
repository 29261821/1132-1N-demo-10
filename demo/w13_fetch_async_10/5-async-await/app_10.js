const btn = document.querySelector('.btn')
const url = './api/person.json'

let persons = []

btn.addEventListener('click', () => {
  getDataAsyncAwait(url)
  // persons = await getDataByFetchAPI(url)
  // console.log('persons', persons)
})

const getDataAsyncAwait = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log('data', data)
    displayItems(data)
  } catch (err) {
    console.log(err)
  }
}

const getDataByFetchAPI1 = (url) => {
  fetch(url)
    .then((response) => {
      console.log('response', response)
      return response.json()
    })
    .then((data) => {
      console.log('data', data)
      persons = data
    })
    .catch((err) => console.log(err))
}

const getDataByFetchAPI2 = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log('data', data)
      displayItems(data)
    })
    .catch((err) => console.log(err))
}

const displayItems = (persons) => {
  const displayData = persons
    .map((person) => {
      return `
    <p>${person.name}</p>`
    })
    .join('')
  const element = document.createElement('div')
  element.innerHTML = displayData
  document.body.appendChild(element)
}
