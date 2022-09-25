import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState"
import moment from "moment"



function Orders({order, amount, status, user, updated}) {



   const state = useContext(GlobalState)
   const[products] = state.ProductsApi.products
   const[users] = state.UsersApi.users
   const[singleOrders, setSingleOrders] = useState([])
   const[buyer, setBuyer] = useState([])



   useEffect(() => {

    if(order._id) {

products.forEach(product => {
    if(product._id === order._id) setSingleOrders(product)
})

    }

   }, [order._id, products])


   useEffect(() => {

    if(user) {
        users.forEach(person => {
          if(person._id === user)  setBuyer(person) 
        })
    }

  }, [user, users])


  if(singleOrders.length === 0) return null

  
       const picture = singleOrders.productImage.data.data

   

   const base64String =  window.btoa(
    new Uint8Array(picture)
      .reduce((data, byte) => data + String.fromCharCode(byte), '')
  );


  


  if(buyer.length === 0) return null;


    return(<div className="container">
    <div className="row row-cols-3">
<div className="col">

<div className="card">
<img className="card-img-top" src={`data:image/jpg;base64, ${base64String}`} alt={singleOrders.productName} />
<div className="card-body">
  <h2 className="card-title">Buyer's name: <em> {buyer.fullname} </em></h2>
  <h2>Product's name: <em> {singleOrders.productName} </em> </h2>
  <h5 className="card-title">product price: <em>MK{amount}</em></h5>
  <h5 className="card-title">product status: <em> {status} </em></h5>
  <h5 className="card-title">number of products: <em>{order.count}</em> </h5>

</div>
<div className="card-footer">
  <small className="text-muted">Last updated {moment(updated).fromNow()}</small>
</div>
</div>

</div>



    </div>




</div>
)
}

export default Orders