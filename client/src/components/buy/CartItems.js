import moment from "moment";
import "./cart.css";
import { addItem, updateItem, removeItem } from "../../api/CartApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CartItems({
  product,
  showAddToCartButton = true,
  cartUpdate = true,
  showRemoveProductButton = false,
}) {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);
  

  const navigate = useNavigate();
  
  const shouldRedirect = (redirect) => {
    if (redirect) {
      return navigate("/cart");
    }
  };

  
  const showRemoveButton = (showRemoveProductButton) => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => removeItem(product._id)}
          className="badge-pill badge-danger mt-2 mb-2 p-2 px-3"
        >
          Remove Product
        </button>
      )
    );
  };

  const handleChange = (productId) => (event) => {
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = (cartUpdate) => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input
              type="number"
              className="form-control"
              value={count}
              onChange={handleChange(product._id)}
            />
          </div>
        </div>
      )
    );
  };

  const picture = product.productImage.data.data;

  const base64String = window.btoa(
    new Uint8Array(picture).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );

  return (
    <div className="card">
      {shouldRedirect(redirect)}

      <div className="card-body">
        <img
          src={`data:image/jpg;base64, ${base64String}`}
          className="mt-3"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          alt={product.productName}
        />

        <div className="card-header name">{product.productName}</div>

        <p className="lead">{product.productDescription.substring(0, 100)}</p>

        <p className="row ml-3">
          <p style={{ fontSize: "1rem" }} className="row">
            MK
            <div style={{ fontSize: "2rem" }}>{product.productPrice}</div>
          </p>
        </p>

        <p className="black-8">
          Added on {moment(product.createdAt).fromNow()}
        </p>

        <br />

        

        {showRemoveButton(showRemoveProductButton)}

        {showCartUpdateOptions(cartUpdate)}
      </div>
    </div>
  );
}

export default CartItems;
