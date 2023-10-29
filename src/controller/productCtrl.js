const Product = require('../models/Products')


module.exports = {
    createProduct: async (req, res) => {
        
        try {
            const newProduct = new Product({
                ...req.body
            })
            await newProduct.save()
            res.status(200).json('create product success')
        } catch (error) {
            res.status(500).json('create product fail')
        }
    },
    getAllProduct: async (req, res) => {
        try {
            const allProducts = await Product.find({})
            res.status(200).json(allProducts)
        } catch (error) {
            res.status(500).json('get product fail')
        }
    },
    searchProduct: async (req, res) => {
        try {
            const result = await Product.aggregate(
                [
                    {
                        $search: {
                            index: "appCommerce",
                            text: {
                                query: req.params.key,
                                path: {
                                    wildcard: "*"
                                }
                            }
                        }
                    }
                ]
            )
            res.status(200).json(result)
        } catch (error) {
            res.status(200).json('error search')
        }
    },
    deleteProduct: async (req, res) => {
        const id = req.params.id
        try {
            await Product.findByIdAndDelete({_id: id })
            res.status(200).json('delete product success')
        } catch (error) {
            res.status(501).json('delete product fail')
        }
    },
    editProduct: async (req, res) => {
        const id = req.params.id
        try {
            const editproduct = req.body
            await Product.findByIdAndUpdate(id, editproduct)
            res.status(200).json('edit product success')
        } catch (error) {
            res.status(500).json('edit product fail')
        }
    }
}