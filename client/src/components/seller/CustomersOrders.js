import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState"
import CustomerOrders from "./CustomerOrders"

function CustomersOrders() {

   const state = useContext(GlobalState)
   const [token] = state.token
   const [items, setItems] = useState([])
    
   

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

   

    return(<div>
        {
         items.map((item, index) => {
            return <CustomerOrders key={index} item={item} />

         })   
        }
    
    </div>)
}

export default CustomersOrders