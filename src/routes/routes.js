const productRoute = require('./productsRoute')
const userRoute = require('./userRoute')
const orderRoute = require('./orderRoute')
const authRoute = require('./auth')

const initRoute = (app) => {
    app.use('/products', productRoute)
    app.use('/users', userRoute)
    app.use('/orders', orderRoute)
    app.use('/auth', authRoute)
}


module.exports = initRoute