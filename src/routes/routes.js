const productRoute = require('./productsRoute')
const userRoute = require('./userRoute')
const orderRoute = require('./orderRoute')


const initRoute = (app) => {
    app.use('/products', productRoute)
    app.use('/users', userRoute)
    app.use('/orders', orderRoute)
}


module.exports = initRoute