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

    const {products, amount} = req.body
    const order = new Order({
      products,
      amount,
      user: req.user.id
    });
   await order.save((error, data) => {
        if (error) {
            return res.status(400).json({
                error: errorHandler(error)
            });
        
        } 
        

      
      }
      

        )
    
        res.json({msg: "order succesfully created"});



    
  })
);

OrderRoute.get(
  "/cart/show_carts",
  verify,
  authAdmin,
  asyncHandler(async (req, res) => {
    const result = await Order.find();

    res.json({ result });
  })
);

OrderRoute.get(
  "/cart/show_user_carts",
  verify,
  asyncHandler(async (req, res) => {

await Order.find({user: req.user.id}).then(orders => res.json({orders}))




  })
);

module.exports = OrderRoute;
