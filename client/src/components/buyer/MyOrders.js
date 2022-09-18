import axios from "axios"
import {  useEffect, useState, useContext } from "react"
import { GlobalState } from "../../GlobalState"
import Orders from "./Orders"


function MyOrders() {

  const state =  useContext(GlobalState)
  const[token] = state.token
  const[items, setItems] = useState([])

  useEffect(() => {

    const getOrders = async() => {

        const res = await axios.get("/cart/show_user_carts", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        setItems(res.data.carts);



    }

    getOrders()



  }, [token])

//   console.log(items);



    return(<>


    {
        items.map(item => {
            return(

                
                    item.cartItems.map((order, index) => {

                        return(

                            <Orders key={index} order={order} />
                            
                        )



                    })
                
            )
        })
    }
    
    
    
    
    </>)


}


export default MyOrders