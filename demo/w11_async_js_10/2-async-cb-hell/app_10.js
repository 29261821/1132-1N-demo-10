function boilWater(time) {
  console.log('boiling...')
  setTimeout(() => {
    console.log('add carrot')
    console.log('boiling...')
    setTimeout(() => {
      console.log('done')
      console.log('add union')
      console.log('boiling...')
      setTimeout(() => {
        console.log('done')
        console.log('add union')
        console.log('boiling...')
        setTimeout(() => {
          console.log('done')
          console.log('all done')
        }, 1000)
      }, 1000)
    }, 1000)
  }, time)

  console.log('done')
}

console.log('chop carrot')
boilWater(2000)

//function boilWater(time) {
//  console.log('boiling...')
//  for (let i = 0; i < time; i++) {
//    console.log('still not done...')
//  }
//  console.log('done')
//}

//console.log('chop carrot')
//boilWater(2000)
//console.log('add carrot')
//boilWater(1000)
//console.log('chop union')
//boilWater(1000)
//console.log('add union')
//boilWater(1000)
//console.log('all done')
