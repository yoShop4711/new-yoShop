import { useEffect, useState, useContext } from "react"
import { GlobalState } from "../../GlobalState"


function AllOrders({order, user}) {

    const state = useContext(GlobalState)
   const[products] = state.ProductsApi.products
   const[singleOrders, setSingleOrders] = useState([])
   const [dropdown, setDropdown] = useState(false);


// console.log(order._id);

   useEffect(() => {

    if(order._id) {

products.forEach(product => {
    if(product._id === order._id) setSingleOrders(product)
})

    }

   }, [order._id, products])


   

//    const picture = singleOrders.productImage.data.data

   

//    const base64String =  window.btoa(
//     new Uint8Array(picture)
//       .reduce((data, byte) => data + String.fromCharCode(byte), '')
//   );

  if(singleOrders.length === 0) 
  return <h2 style={{textAlign: "center", fontSize: "5rem"}}>No orders</h2> 




    
    return(<>
    
    
    
    </>
          )
}

export default AllOrders