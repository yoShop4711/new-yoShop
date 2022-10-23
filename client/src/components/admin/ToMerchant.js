import axios from "axios";
import { useContext } from "react";
import { GlobalState } from "../../GlobalState"
import { useParams } from "react-router-dom"


function ToMerchant() {
  
   const{id} = useParams()
   const state = useContext(GlobalState)
   const [token] = state.token

  
  
  
const sendToMerchant = async() => {
  
    //  await fetch(
    //   `/cart/send_to_merchant/${id}`,
    //   {
    //     method: "POST",
    //     headers: {
      
    //       "Authorization": `Bearer ${token}`,
    //     },
    //   }
    // );

    // alert("order has been sent to merchant");

    const response = await axios({
      method: "post",
      url: `/cart/send_to_merchant/${id}`,
      headers: {
      
        "Authorization": `Bearer ${token}`,
      },
    
    });


    alert(response.data.msg);


    
  
}


    return(<div>
 <div className="col-left">
                <h2> Send Product To merchant</h2>

                <button onClick={sendToMerchant}>send</button>
            </div>

    </div>)
}

export default ToMerchant