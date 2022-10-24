import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState"

function CustomersOrders() {

   const state = useContext(GlobalState)
   const [token] = state.token
   const [products] = state.ProductsApi.products
   const [users] = state.UsersApi.users
   const [items, setItems] = useState([])
   const[resultOrders, setResultOrders] = useState([])
   const [merchantOrders, setMerchantOrders] = useState([])
   

   useEffect(() => {
    const getOrders  = async() => {

        const res = await axios.get('/cart/show_order_to_merchant', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        setItems(res.data);


    }

    getOrders()

   }, [token])


   useEffect(() => {

    const allOrders = async() => {

        const res = await axios.get('/cart/show_carts', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        setResultOrders(res.data.result);

    }

    allOrders()


   }, [token])


   

   
//   useEffect(() => {

//     if(orderID) {
//         resultOrders.forEach(res => {
//             if(res._id === orderID) setMerchantOrders(res)
//         })

//     }

//   }, [orderID, resultOrders])

  
// console.log(merchantOrders);
   



    return(<div>
        <p>customer orders</p>
    
    </div>)
}

export default CustomersOrders