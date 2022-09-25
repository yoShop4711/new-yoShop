import axios from "axios"
import {  useEffect, useState, useContext } from "react"
import { GlobalState } from "../../GlobalState"
import AllOrders from "./AllOrders"


function MyOrders() {

  const state =  useContext(GlobalState)
  const[token] = state.token
  const[items, setItems] = useState([])

  useEffect(() => {

    const getOrders = async() => {

        const res = await axios.get("/cart/show_carts", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        setItems(res.data.result);



    }

    getOrders()



  }, [token])

  



    return(<>


     {
        items.map(item => {
            return(

                
                    item.products.map((order, index) => {

                        return(

                            <AllOrders key={index} order={order} 
                            amount={item.amount}
                            status={item.status}
                            user={item.user}
                            updated={item.updatedAt} />
                            
                        )



                    })
                
            )
        })
    }
     
    
    
    </>)


}


export default MyOrders