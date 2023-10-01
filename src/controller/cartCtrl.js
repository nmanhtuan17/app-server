const Cart = require("../models/Cart");
const Product = require("../models/Products");
module.exports = {
  addToCart: async (req, res) => {
    const { userId, cartItem, qty } = req.body;
    try {
      const cart = Cart.findOne({ userId });
      if (cart) {
        const existProduct = cart.products.find(
          (product) => product.cartItem.toString() === cartItem
        );

        if (existProduct) {
          existProduct.qty += 1;
        } else {
          cart.products.push({ cartItem, qty });
        }
        await cart.save();
        res.status(200).json("product added to cart");
      } else {
        const newCart = new Cart({
          userId,
          products: [{ cartItem, qty: qty }],
        });
        await newCart.save()
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
