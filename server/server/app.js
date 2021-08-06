const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
// npm
const mongoose = require('mongoose')
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const cors = require('cors')

// Db connection
require('./db/connection')
// --- Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors())

// --- Import route
const authRoutes = require('./routes/auth.route')
const userRoutes = require('./routes/user.route')
const categoryRoutes = require('./routes/category.route')
const productRoutes = require('./routes/product.route')
const orderRoutes = require('./routes/order.route')
// const paymentBRoutes = require('./routes/paymentBRoutes.js')
//  ---My route
app.use('/api', authRoutes)
app.use('/api', userRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)
app.use('/api', orderRoutes)
// app.use('/api', paymentBRoutes)

// PORT
const port = process.env.PORT || 5000
//Starting a server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
