import MerchantOrder from "./MerchantOrder"



function CustomerOrder({product, resultOrders}) {

    

 

    return(<div>

        {
            resultOrders.map((merchantOrders, index) => {
                return <MerchantOrder key={index} merchantOrders={merchantOrders} product={product} />
            })
        }
        
    </div>)
}

export default CustomerOrder