const OrderRoute = require("express").Router();
const verify = require("../middleware/verify");
const authAdmin = require("../middleware/authAdmin");
const {Order, CartItem} = require("../models/order")
const { errorHandler} = require("./errorHandler")
const asyncHandler = require("express-async-handler");

OrderRoute.post(
  "/cart/create_order",
  verify,
  asyncHandler(async (req, res) => {

    // req.body.order = req.user.id 

    const {products} = req.body

    const order = new Order({
      products,
  
      user: req.user.id
    });
    order.save((error, data) => {
        if (error) {
            return res.status(400).json({
                error: errorHandler(error)
            });
        } 
        res.json(data);

      
      }
      

        )
    




    
  })
);

// OrderRoute.get(
//   "/cart/show_carts",
//   verify,
//   authAdmin,
//   asyncHandler(async (req, res) => {
//     const result = await Cart.find();

//     res.json({ result });
//   })
// );

// OrderRoute.get(
//   "/cart/show_user_carts",
//   verify,
//   asyncHandler(async (req, res) => {

// await Cart.find({user: req.user.id}).then(carts => res.json({carts}))




//   })
// );

module.exports = OrderRoute;
