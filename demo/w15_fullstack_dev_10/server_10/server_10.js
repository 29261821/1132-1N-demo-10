//server_10.js
import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import apiProductRouter from './routes/api/apiProductRouter_10.js'
import ProductRouter from './routes/ProductRouter_10.js'

const app_10 = express()

app_10.use(cors())
app_10.use(logger('dev'))
app_10.use(express.static('public'))
app_10.set('view engine', 'ejs')

app_10.use('/api/product_10', apiProductRouter)
app_10.use('/product_10', ProductRouter)

app_10.use('/product_10/static', (req, res, next) => {
  res.render('product_10/static_10', {
    title: 'Get products - static',
    name: 'pengsenFang',
    id: '213410110',
  })
})

app_10.use('/blog_10/static', (req, res, next) => {
  res.render('blog_10/static_10', {
    title: 'Get products - static',
    name: 'pengsenFang',
    id: '213410110',
  })
})

//要擺最後一個 不然會匹配到所有/
app_10.use('/', (req, res, next) => {
  res.render('index', {
    title: 'Express',
    name: 'pengsenFang',
    id: '213410110',
  })
})

const port = process.env.PORT || 3000

app_10.listen(port, () => {
  console.log(`connecting ${process.env.DATABASE} server on port: ${port}`)
})
