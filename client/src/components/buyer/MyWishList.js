import moment from "moment";

function MyWishlist({wishlist}) {

    if(wishlist.length === 0) return null

    const picture = wishlist.productImage.data.data
  
      const base64String =  window.btoa(
          new Uint8Array(picture)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
  

    return(<div className="product_card">
        <img  src={`data:image/jpg;base64, ${base64String}`} alt={wishlist.productName} />
        <div className="product_box">
        <h3> <em> {wishlist.productName} </em> </h3>
        <p><em> {wishlist.productDescription} </em> </p>


        <small>Last updated {moment(wishlist.createdAt).fromNow()}</small>


        </div>

    
    
    
    
    </div>)
}

export default MyWishlist