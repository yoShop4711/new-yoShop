import moment from "moment"
import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState"

function DeliverTable({item, amount, status, user, updated}) {

    const state = useContext(GlobalState)
    
    const[products] = state.ProductsApi.products
    const[users] = state.UsersApi.users
    const[prods, setProds] = useState([])
    const[buyer, setBuyer] = useState([])

    useEffect(() => {



    if(item._id) {
        products.forEach(product => {

            if(product._id === item._id) setProds(product)


        })
    }





    }, [item._id, products])

    const picture = prods.productImage.data.data

    const base64String =  window.btoa(
        new Uint8Array(picture)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );



//       useEffect(() => {

//         if(user) {
//             users.forEach(person => {
//               if(person._id === user)  setBuyer(person) 
//             })
//         }

//       }, [user, users])
    
// console.log(buyer);
    
    return(<div className="container">
        <div className="row row-cols-3">
<div className="col">

<div class="card">
    <img class="card-img-top" src={`data:image/jpg;base64, ${base64String}`} alt={prods.productName} />
    <div class="card-body">
      <h5 class="card-title">MK{amount}</h5>
      <h5 class="card-title">product status: <em> {status} </em></h5>
      <h5 class="card-title">number of products: <em>{item.count}</em> </h5>

    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated {moment(updated).fromNow()}</small>
    </div>
  </div>

</div>



        </div>

    
    
    
    </div>)
}

export default DeliverTable