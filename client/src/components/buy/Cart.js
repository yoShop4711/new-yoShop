import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { getCart } from "../../api/CartApi"
import CartItems from "./CartItems";
import Checkout from "./Checkout";

function Cart() {

  const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getCart());
    }, []);

    
    const showItems = items => {
      return (
          <div>
              <h2>Your cart has {`${items.length}`} items</h2>
              <hr />
              {items.map((product, i) => (
                  <CartItems
                      key={i}
                      product={product}
                      showAddToCartButton={false}
                        cartUpdate={true}
                        showRemoveProductButton={true}

                      
                    
                  
                  />
              ))}
          </div>
      );
  };

  const noItemsMessage = () => (
    <h2>
        Your cart is empty. <br /> <Link to="/">Continue shopping</Link>
    </h2>
);

    
  return (
    
    <div className="row">
                <div className="col-6">
                    {items.length > 0 ? showItems(items) : noItemsMessage()}
                </div>

                <div className="col-6">
                    <h2 className="mb-4">Your cart summary</h2>
                    <hr />
                    <Checkout products={items} />
                </div>


                </div>

    
  );
}

export default Cart;
