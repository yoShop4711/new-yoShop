import axios from "axios"
import { useContext, useState, useEffect } from "react"
import { GlobalState } from "../../GlobalState"
import CustomerOrder from "./CustomerOrder"

function CustomerOrders({item}) {
      
      const state =  useContext(GlobalState)
      const [token] = state.token
      const[resultOrders, setResultOrders] = useState([])
      const[merchantOrders, setMerchantOrders] = useState({})




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


         useEffect(() => {

    if(item.orderId) {
        resultOrders.forEach(res => {
            if(res._id === item.orderId) setMerchantOrders(res)
        })

    }

  }, [item.orderId, resultOrders])

    
  

    return(<div>

    
                <CustomerOrder merchantOrders={merchantOrders} />

        
    </div>)
}

export default CustomerOrders