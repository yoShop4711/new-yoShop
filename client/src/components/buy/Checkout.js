import { useContext } from "react";
import {GlobalState } from "../../GlobalState"
import axios from "axios"

function Checkout({products}) {
   const state =   useContext(GlobalState)
   const [token] = state.token

  const getTotal = () => {
    return products.reduce((currentValue, nextValue) => {
        return currentValue + nextValue.count * nextValue.productPrice;
    }, 0);
};





const createOrder = async () => {

  const res = await axios.post("/cart/create_order", {products}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  console.log(res);


}

  return(
    <div>
            <h2>Total: ${getTotal()}</h2>
            <button onClick={createOrder}>create order</button>
          
        </div>
  )
}

export default Checkout