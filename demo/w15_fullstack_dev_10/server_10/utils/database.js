//database.js
import { Pool } from 'pg'

// const { Pool } = pkg;

let pool

console.log('process.env.DATABASE', process.env.DATABASE)

if (process.env.DATABASE === 'LOCAL') {
  pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: '0000',
    database: 'js_demo_10',
  })
} else if (process.env.DATABASE === 'SUPABASE') {
  pool = new Pool({
    host: 'aws-0-ap-southeast-1.pooler.supabase.com',
    port: '5432',
    user: 'postgres.ulgldfuniztgkvysgmuh',
    password: 'auguat83121109',
    database: 'postgres',
  })
}

console.log('connect database', pool.options)

export default pool
