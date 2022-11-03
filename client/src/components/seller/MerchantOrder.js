import { useEffect, useState } from "react";

function MerchantOrder({merchantOrders, product}) {

    

    const[owner, setOwner] = useState([])

    

    useEffect(() => {
        if(product._id) {
            merchantOrders.products.forEach((order) => {
                if(order._id === product._id) setOwner(order)

            })
        }

    }, [owner,  merchantOrders.products, product._id])

    console.log(owner)

    return(<div>



    </div>)
}

export default MerchantOrder