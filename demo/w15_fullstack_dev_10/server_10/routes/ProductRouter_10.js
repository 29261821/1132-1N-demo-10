//ProductRouter.js
import express from 'express'

const router = express.Router()

import db from '../utils/database.js'

router.get('/', async (req, res, next) => {
  try {
    const results = await db.query(`select * from product_10`)
    console.log('results', JSON.stringify(results.rows))
    //res.json(results.rows)
    res.render('product_10/index', {
      data: results.rows,
      title: 'Get products From PostgreSQL Server',
      name: 'pengsenFang',
      id: '213410110',
    })
  } catch (error) {
    console.log(error)
  }
})

export default router
