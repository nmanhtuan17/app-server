const productRoute = require('./products')

const initRoute = (app) => {
    app.use('/api/products', productRoute)
}


module.exports = initRoute