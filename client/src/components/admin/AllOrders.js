import { useEffect, useState, useContext } from "react"
import { GlobalState } from "../../GlobalState"


function AllOrders({order}) {

   

    const state = useContext(GlobalState)
   const[products] = state.ProductsApi.products
   const[singleOrders, setSingleOrders] = useState([])



   useEffect(() => {

    if(order.product) {

products.forEach(product => {
    if(product._id === order.product) setSingleOrders(product)
})

    }

   }, [order.product, products])


   if(singleOrders.length === 0) return null;

   const picture = singleOrders.productImage.data.data

   

   const base64String =  window.btoa(
    new Uint8Array(picture)
      .reduce((data, byte) => data + String.fromCharCode(byte), '')
  );

  

    
    return(<>

    <h1>{singleOrders.productDescription}</h1>
    
    
    
    </>)
}

export default AllOrders